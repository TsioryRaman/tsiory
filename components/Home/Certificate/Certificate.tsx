import { Flex, Image, Skeleton } from "@chakra-ui/react";
import React, { useState, useCallback, FC } from "react";
import { certificates } from "../../../utils/constants";

export const Certificate: FC = () => {
  return (
    <Flex
      direction={["row"]}
      gap={2}
      wrap="wrap"
      justifyContent="center"
      alignItems="center"
      mt="8"
    >
      {certificates.map((certificate, index) => (
        <LoadingImage certificate={certificate} key={index} />
      ))}
    </Flex>
  );
};

type LoadingImageProps = {
  certificate: string;
};

const LoadingImage: React.FC<LoadingImageProps> = React.memo(
  ({ certificate }) => {
    const [loading, setLoading] = useState(false);

    const onLoad = useCallback(() => {
      setLoading(false);
    }, []);
    return (
      <>
        {loading ? (
          <Skeleton w="300px" h="200px" />
        ) : (
          <Image
            src={certificate}
            _hover={{ transform: "scale(1.6)" }}
            onLoad={onLoad}
            transitionDuration="300ms"
            rounded="sm"
            w="300px"
            h="200px"
            backgroundRepeat="no-repeat"
          />
        )}
      </>
    );
  }
);
