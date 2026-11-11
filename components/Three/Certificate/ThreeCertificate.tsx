import React, {
  Suspense,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import {
  Box,
  Flex,
  IconButton,
  Spinner,
  Text,
  VisuallyHidden,
  useColorModeValue,
} from "@chakra-ui/react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  ContactShadows,
  RoundedBox,
  useCursor,
  useProgress,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";
import { ChevronLeft, ChevronRight, ExternalLink } from "react-feather";
import { certifications } from "../../../utils/data";
import { CERTIFICATE_CANVAS_HEIGHT } from "./constants";

const CARD_WIDTH = 3.4;
const CARD_HEIGHT = 2.59;
const CARD_DEPTH = 0.08;
const CARD_GAP = 3.45;

const usePrefersReducedMotion = () => {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return reduced;
};

type CardProps = {
  index: number;
  active: number;
  onSelect: (index: number) => void;
  frameColor: string;
  accentColor: string;
  still: boolean;
};

const CertificateCard: React.FC<CardProps> = ({
  index,
  active,
  onSelect,
  frameColor,
  accentColor,
  still,
}) => {
  const texture = useTexture(certifications[index].file);
  const group = useRef<THREE.Group>(null);
  const initialOffset = useRef(index - active);
  const [hovered, setHovered] = useState(false);

  useCursor(hovered);

  texture.anisotropy = 8;

  useLayoutEffect(() => {
    const card = group.current;
    if (!card) return;
    const offset = initialOffset.current;
    card.position.set(offset * CARD_GAP, 0, -Math.abs(offset) * 1.05);
    card.rotation.y = offset * -0.4;
    card.scale.setScalar(1 - Math.min(Math.abs(offset), 2) * 0.075);
  }, []);

  useFrame((state, delta) => {
    const card = group.current;
    if (!card) return;

    const offset = index - active;
    const clamped = THREE.MathUtils.clamp(offset, -2.5, 2.5);
    const targetX = clamped * CARD_GAP;
    const targetZ = -Math.abs(clamped) * 1.05 + (hovered ? 0.22 : 0);
    const targetY =
      (hovered ? 0.08 : 0) +
      (still ? 0 : Math.sin(state.clock.elapsedTime * 0.8 + index) * 0.015);
    const targetRotationY = clamped * -0.4;
    const targetScale =
      1 - Math.min(Math.abs(clamped), 2) * 0.075 + (hovered ? 0.025 : 0);
    const damping = still ? 40 : 6;

    card.position.x = THREE.MathUtils.damp(
      card.position.x,
      targetX,
      damping,
      delta
    );
    card.position.y = THREE.MathUtils.damp(
      card.position.y,
      targetY,
      damping,
      delta
    );
    card.position.z = THREE.MathUtils.damp(
      card.position.z,
      targetZ,
      damping,
      delta
    );
    card.rotation.y = THREE.MathUtils.damp(
      card.rotation.y,
      targetRotationY,
      damping,
      delta
    );
    const scale = THREE.MathUtils.damp(
      card.scale.x,
      targetScale,
      damping,
      delta
    );
    card.scale.setScalar(scale);
  });

  return (
    <group
      ref={group}
      onPointerOver={(event) => {
        event.stopPropagation();
        setHovered(true);
      }}
      onPointerOut={() => setHovered(false)}
      onClick={(event) => {
        event.stopPropagation();
        onSelect(index);
      }}
    >
      <RoundedBox
        args={[CARD_WIDTH + 0.18, CARD_HEIGHT + 0.18, CARD_DEPTH]}
        radius={0.05}
        smoothness={4}
      >
        <meshStandardMaterial
          color={frameColor}
          roughness={0.55}
          metalness={0.06}
        />
      </RoundedBox>

      <mesh position={[0, 0, CARD_DEPTH / 2 + 0.002]}>
        <planeGeometry args={[CARD_WIDTH, CARD_HEIGHT]} />
        <meshBasicMaterial map={texture} toneMapped={false} />
      </mesh>

      {index === active && (
        <mesh
          position={[0, -(CARD_HEIGHT + 0.18) / 2 - 0.09, CARD_DEPTH / 2]}
        >
          <planeGeometry args={[CARD_WIDTH * 0.34, 0.035]} />
          <meshBasicMaterial color={accentColor} toneMapped={false} />
        </mesh>
      )}
    </group>
  );
};

const CameraRig: React.FC = () => {
  const { camera, size } = useThree();

  useLayoutEffect(() => {
    if (!(camera instanceof THREE.PerspectiveCamera)) return;
    const aspect = size.width / size.height;
    camera.position.z = aspect < 1.15 ? 12 : aspect < 1.7 ? 10.5 : 9;
    camera.updateProjectionMatrix();
  }, [camera, size]);

  return null;
};

type SceneProps = {
  active: number;
  onSelect: (index: number) => void;
  frameColor: string;
  accentColor: string;
  shadowColor: string;
  still: boolean;
};

const Scene: React.FC<SceneProps> = ({
  active,
  onSelect,
  frameColor,
  accentColor,
  shadowColor,
  still,
}) => {
  return (
    <>
      <CameraRig />
      <ambientLight intensity={0.85} />
      <directionalLight position={[5, 6, 8]} intensity={1.15} />
      <directionalLight position={[-6, -3, 4]} intensity={0.35} />

      <Suspense fallback={null}>
        {certifications.map((certification, index) => (
          <CertificateCard
            key={certification.file}
            index={index}
            active={active}
            onSelect={onSelect}
            frameColor={frameColor}
            accentColor={accentColor}
            still={still}
          />
        ))}
      </Suspense>

      <ContactShadows
        position={[0, -1.75, 0]}
        opacity={0.32}
        scale={20}
        blur={2.6}
        far={4.5}
        resolution={512}
        color={shadowColor}
      />
    </>
  );
};

const ThreeCertificate: React.FC = () => {
  const [active, setActive] = useState(0);
  const { active: loading, progress } = useProgress();
  const still = usePrefersReducedMotion();

  const frameColor = useColorModeValue("#F3F1EA", "#26241F");
  const accentColor = useColorModeValue("#1D4ED8", "#8AA6FF");
  const shadowColor = useColorModeValue("#1F2937", "#000000");
  const glow = useColorModeValue(
    "rgba(29, 78, 216, 0.16)",
    "rgba(138, 166, 255, 0.14)"
  );

  const total = certifications.length;
  const current = certifications[active];

  const goTo = (next: number) => {
    setActive(((next % total) + total) % total);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(active - 1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(active + 1);
    }
  };

  return (
    <Box>
      <Flex
        mb="4"
        justifyContent="space-between"
        alignItems="baseline"
        gap="4"
        flexWrap="wrap"
      >
        <Text
          fontFamily="mono"
          fontSize="10px"
          letterSpacing="0.14em"
          textTransform="uppercase"
          color="muted"
        >
          HackerRank — cliquez sur une carte
        </Text>
        <Text
          fontFamily="mono"
          fontSize="10px"
          letterSpacing="0.14em"
          color="accent"
        >
          {String(active + 1).padStart(2, "0")} /{" "}
          {String(total).padStart(2, "0")}
        </Text>
      </Flex>

      <Box
        position="relative"
        h={CERTIFICATE_CANVAS_HEIGHT}
        tabIndex={0}
        role="region"
        aria-roledescription="carrousel"
        aria-label="Certifications HackerRank"
        onKeyDown={handleKeyDown}
        outline="none"
      >
        <Box
          position="absolute"
          inset="0"
          pointerEvents="none"
          style={{
            background: `radial-gradient(55% 55% at 50% 55%, ${glow}, transparent 72%)`,
          }}
        />
        <Canvas
          camera={{ position: [0, 0.1, 9], fov: 35 }}
          dpr={[1, 2]}
          gl={{ alpha: true, antialias: true }}
          style={{ touchAction: "pan-y" }}
        >
          <Scene
            active={active}
            onSelect={goTo}
            frameColor={frameColor}
            accentColor={accentColor}
            shadowColor={shadowColor}
            still={still}
          />
        </Canvas>

        {loading && (
          <Flex
            position="absolute"
            inset="0"
            direction="column"
            alignItems="center"
            justifyContent="center"
            gap="3"
            pointerEvents="none"
          >
            <Spinner size="sm" color="accent" thickness="2px" />
            <Text
              fontFamily="mono"
              fontSize="10px"
              letterSpacing="0.14em"
              textTransform="uppercase"
              color="muted"
            >
              Chargement — {Math.round(progress)} %
            </Text>
          </Flex>
        )}
      </Box>

      <Flex
        mt="6"
        pt="5"
        borderTopWidth="1px"
        borderColor="rule"
        alignItems="flex-end"
        justifyContent="space-between"
        gap="6"
        flexWrap="wrap"
      >
        <Box aria-live="polite">
          <Text
            fontFamily="mono"
            fontSize="10px"
            letterSpacing="0.14em"
            textTransform="uppercase"
            color="accent"
            mb="2"
          >
            {current.issuer}
          </Text>
          <Text
            fontFamily="heading"
            fontSize={["lg", "xl", "xl", "2xl"]}
            lineHeight="1.1"
            color="ink"
          >
            {current.title}
          </Text>
          <a
            className="cv-link"
            href={encodeURI(current.file)}
            target="_blank"
            rel="noreferrer"
            style={{ marginTop: 12, display: "inline-flex", gap: 6 }}
          >
            Voir le certificat <ExternalLink size={11} />
          </a>
        </Box>

        <Flex alignItems="center" gap="5">
          <Flex alignItems="center" gap="1">
            {certifications.map((certification, index) => (
              <Box
                as="button"
                type="button"
                key={certification.file}
                aria-label={`Afficher ${certification.title}`}
                aria-current={index === active}
                onClick={() => goTo(index)}
                display="flex"
                alignItems="center"
                h="8"
                px="1"
                cursor="pointer"
              >
                <Box
                  h="2px"
                  w={index === active ? "26px" : "10px"}
                  bg={index === active ? "accent" : "rule"}
                  transitionProperty="all"
                  transitionDuration="200ms"
                />
              </Box>
            ))}
          </Flex>

          <Flex gap="2">
            <IconButton
              aria-label="Certificat précédent"
              icon={<ChevronLeft size={16} />}
              onClick={() => goTo(active - 1)}
              borderWidth="1px"
              borderColor="rule"
              borderRadius="2px"
              bg="transparent"
              color="ink"
              size="sm"
              _hover={{ borderColor: "accent", color: "accent" }}
              _active={{ bg: "surface" }}
            />
            <IconButton
              aria-label="Certificat suivant"
              icon={<ChevronRight size={16} />}
              onClick={() => goTo(active + 1)}
              borderWidth="1px"
              borderColor="rule"
              borderRadius="2px"
              bg="transparent"
              color="ink"
              size="sm"
              _hover={{ borderColor: "accent", color: "accent" }}
              _active={{ bg: "surface" }}
            />
          </Flex>
        </Flex>
      </Flex>

      <VisuallyHidden as="ul">
        {certifications.map((certification) => (
          <li key={certification.file}>
            <a
              href={encodeURI(certification.file)}
              target="_blank"
              rel="noreferrer"
            >
              {certification.title} — {certification.issuer}
            </a>
          </li>
        ))}
      </VisuallyHidden>
    </Box>
  );
};

export default ThreeCertificate;
