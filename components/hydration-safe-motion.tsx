"use client";

import { motion, MotionProps } from "framer-motion";
import { useHydration } from "@/hooks/use-hydration";
import { ReactNode } from "react";

interface HydrationSafeMotionProps extends MotionProps {
  children: ReactNode;
  fallback?: ReactNode;
  as?: keyof typeof motion;
}

export default function HydrationSafeMotion({
  children,
  fallback = null,
  as = "div",
  ...motionProps
}: HydrationSafeMotionProps) {
  const isHydrated = useHydration();

  if (!isHydrated) {
    return <>{fallback || children}</>;
  }

  // Handle different motion components with proper typing
  switch (as) {
    case "div":
      return <motion.div {...motionProps}>{children}</motion.div>;
    case "span":
      return <motion.span {...motionProps}>{children}</motion.span>;
    case "button":
      return <motion.button {...motionProps}>{children}</motion.button>;
    case "section":
      return <motion.section {...motionProps}>{children}</motion.section>;
    case "article":
      return <motion.article {...motionProps}>{children}</motion.article>;
    case "header":
      return <motion.header {...motionProps}>{children}</motion.header>;
    case "footer":
      return <motion.footer {...motionProps}>{children}</motion.footer>;
    case "nav":
      return <motion.nav {...motionProps}>{children}</motion.nav>;
    case "main":
      return <motion.main {...motionProps}>{children}</motion.main>;
    case "aside":
      return <motion.aside {...motionProps}>{children}</motion.aside>;
    case "form":
      return <motion.form {...motionProps}>{children}</motion.form>;
    case "ul":
      return <motion.ul {...motionProps}>{children}</motion.ul>;
    case "ol":
      return <motion.ol {...motionProps}>{children}</motion.ol>;
    case "li":
      return <motion.li {...motionProps}>{children}</motion.li>;
    case "p":
      return <motion.p {...motionProps}>{children}</motion.p>;
    case "h1":
      return <motion.h1 {...motionProps}>{children}</motion.h1>;
    case "h2":
      return <motion.h2 {...motionProps}>{children}</motion.h2>;
    case "h3":
      return <motion.h3 {...motionProps}>{children}</motion.h3>;
    case "h4":
      return <motion.h4 {...motionProps}>{children}</motion.h4>;
    case "h5":
      return <motion.h5 {...motionProps}>{children}</motion.h5>;
    case "h6":
      return <motion.h6 {...motionProps}>{children}</motion.h6>;
    case "a":
      return <motion.a {...motionProps}>{children}</motion.a>;
    case "img":
      return <motion.img {...motionProps}>{children}</motion.img>;
    case "input":
      return <motion.input {...motionProps}>{children}</motion.input>;
    case "label":
      return <motion.label {...motionProps}>{children}</motion.label>;
    case "textarea":
      return <motion.textarea {...motionProps}>{children}</motion.textarea>;
    case "select":
      return <motion.select {...motionProps}>{children}</motion.select>;
    case "option":
      return <motion.option {...motionProps}>{children}</motion.option>;
    case "table":
      return <motion.table {...motionProps}>{children}</motion.table>;
    case "thead":
      return <motion.thead {...motionProps}>{children}</motion.thead>;
    case "tbody":
      return <motion.tbody {...motionProps}>{children}</motion.tbody>;
    case "tr":
      return <motion.tr {...motionProps}>{children}</motion.tr>;
    case "th":
      return <motion.th {...motionProps}>{children}</motion.th>;
    case "td":
      return <motion.td {...motionProps}>{children}</motion.td>;
    case "svg":
      return <motion.svg {...motionProps}>{children}</motion.svg>;
    case "path":
      return <motion.path {...motionProps}>{children}</motion.path>;
    case "circle":
      return <motion.circle {...motionProps}>{children}</motion.circle>;
    case "rect":
      return <motion.rect {...motionProps}>{children}</motion.rect>;
    case "line":
      return <motion.line {...motionProps}>{children}</motion.line>;
    case "polygon":
      return <motion.polygon {...motionProps}>{children}</motion.polygon>;
    case "polyline":
      return <motion.polyline {...motionProps}>{children}</motion.polyline>;
    case "ellipse":
      return <motion.ellipse {...motionProps}>{children}</motion.ellipse>;
    case "g":
      return <motion.g {...motionProps}>{children}</motion.g>;
    case "text":
      return <motion.text {...motionProps}>{children}</motion.text>;
    case "tspan":
      return <motion.tspan {...motionProps}>{children}</motion.tspan>;
    case "title":
      return <motion.title {...motionProps}>{children}</motion.title>;
    case "desc":
      return <motion.desc {...motionProps}>{children}</motion.desc>;
    case "defs":
      return <motion.defs {...motionProps}>{children}</motion.defs>;
    case "clipPath":
      return <motion.clipPath {...motionProps}>{children}</motion.clipPath>;
    case "mask":
      return <motion.mask {...motionProps}>{children}</motion.mask>;
    case "filter":
      return <motion.filter {...motionProps}>{children}</motion.filter>;
    case "feGaussianBlur":
      return <motion.feGaussianBlur {...motionProps}>{children}</motion.feGaussianBlur>;
    case "feColorMatrix":
      return <motion.feColorMatrix {...motionProps}>{children}</motion.feColorMatrix>;
    case "feBlend":
      return <motion.feBlend {...motionProps}>{children}</motion.feBlend>;
    case "feOffset":
      return <motion.feOffset {...motionProps}>{children}</motion.feOffset>;
    case "feFlood":
      return <motion.feFlood {...motionProps}>{children}</motion.feFlood>;
    case "feComposite":
      return <motion.feComposite {...motionProps}>{children}</motion.feComposite>;
    case "feMorphology":
      return <motion.feMorphology {...motionProps}>{children}</motion.feMorphology>;
    case "feTurbulence":
      return <motion.feTurbulence {...motionProps}>{children}</motion.feTurbulence>;
    case "feDisplacementMap":
      return <motion.feDisplacementMap {...motionProps}>{children}</motion.feDisplacementMap>;
    case "feConvolveMatrix":
      return <motion.feConvolveMatrix {...motionProps}>{children}</motion.feConvolveMatrix>;
    case "feDiffuseLighting":
      return <motion.feDiffuseLighting {...motionProps}>{children}</motion.feDiffuseLighting>;
    case "feSpecularLighting":
      return <motion.feSpecularLighting {...motionProps}>{children}</motion.feSpecularLighting>;
    case "fePointLight":
      return <motion.fePointLight {...motionProps}>{children}</motion.fePointLight>;
    case "feSpotLight":
      return <motion.feSpotLight {...motionProps}>{children}</motion.feSpotLight>;
    case "feDistantLight":
      return <motion.feDistantLight {...motionProps}>{children}</motion.feDistantLight>;
    case "feMerge":
      return <motion.feMerge {...motionProps}>{children}</motion.feMerge>;
    case "feMergeNode":
      return <motion.feMergeNode {...motionProps}>{children}</motion.feMergeNode>;
    case "feTile":
      return <motion.feTile {...motionProps}>{children}</motion.feTile>;
    case "feImage":
      return <motion.feImage {...motionProps}>{children}</motion.feImage>;
    case "feFuncR":
      return <motion.feFuncR {...motionProps}>{children}</motion.feFuncR>;
    case "feFuncG":
      return <motion.feFuncG {...motionProps}>{children}</motion.feFuncG>;
    case "feFuncB":
      return <motion.feFuncB {...motionProps}>{children}</motion.feFuncB>;
    case "feFuncA":
      return <motion.feFuncA {...motionProps}>{children}</motion.feFuncA>;
    case "feComponentTransfer":
      return <motion.feComponentTransfer {...motionProps}>{children}</motion.feComponentTransfer>;
    case "feDropShadow":
      return <motion.feDropShadow {...motionProps}>{children}</motion.feDropShadow>;
    case "feMorphology":
      return <motion.feMorphology {...motionProps}>{children}</motion.feMorphology>;
    case "feTurbulence":
      return <motion.feTurbulence {...motionProps}>{children}</motion.feTurbulence>;
    case "feDisplacementMap":
      return <motion.feDisplacementMap {...motionProps}>{children}</motion.feDisplacementMap>;
    case "feConvolveMatrix":
      return <motion.feConvolveMatrix {...motionProps}>{children}</motion.feConvolveMatrix>;
    case "feDiffuseLighting":
      return <motion.feDiffuseLighting {...motionProps}>{children}</motion.feDiffuseLighting>;
    case "feSpecularLighting":
      return <motion.feSpecularLighting {...motionProps}>{children}</motion.feSpecularLighting>;
    case "fePointLight":
      return <motion.fePointLight {...motionProps}>{children}</motion.fePointLight>;
    case "feSpotLight":
      return <motion.feSpotLight {...motionProps}>{children}</motion.feSpotLight>;
    case "feDistantLight":
      return <motion.feDistantLight {...motionProps}>{children}</motion.feDistantLight>;
    case "feMerge":
      return <motion.feMerge {...motionProps}>{children}</motion.feMerge>;
    case "feMergeNode":
      return <motion.feMergeNode {...motionProps}>{children}</motion.feMergeNode>;
    case "feTile":
      return <motion.feTile {...motionProps}>{children}</motion.feTile>;
    case "feImage":
      return <motion.feImage {...motionProps}>{children}</motion.feImage>;
    case "feFuncR":
      return <motion.feFuncR {...motionProps}>{children}</motion.feFuncR>;
    case "feFuncG":
      return <motion.feFuncG {...motionProps}>{children}</motion.feFuncG>;
    case "feFuncB":
      return <motion.feFuncB {...motionProps}>{children}</motion.feFuncB>;
    case "feFuncA":
      return <motion.feFuncA {...motionProps}>{children}</motion.feFuncA>;
    case "feComponentTransfer":
      return <motion.feComponentTransfer {...motionProps}>{children}</motion.feComponentTransfer>;
    case "feDropShadow":
      return <motion.feDropShadow {...motionProps}>{children}</motion.feDropShadow>;
    default:
      return <motion.div {...motionProps}>{children}</motion.div>;
  }
}
