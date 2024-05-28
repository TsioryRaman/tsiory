export const Intersect = (element:string,cb:Function,root?:null) => {
    let options = {
        root: root,
        rootMargin: "0px",
        threshold: 1.0,
      };

      let target = document.querySelectorAll(element);
      let callback = (entries:any) => {
        entries.forEach((entry:any) => {
            cb(entry)
        });
      };
      
      let observer = new IntersectionObserver(callback, options);
      target.forEach(element => {
        if(target) observer.observe(element)
      })

}