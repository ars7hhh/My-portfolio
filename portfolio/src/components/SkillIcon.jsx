import {
  SiPython,
  SiReact,
  SiTensorflow,
  SiPytorch,
  SiOpencv,
  SiFlask,
  SiNodedotjs,
  SiHtml5,
  SiCss,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiJavascript,
} from "react-icons/si";

const icons = {
  python: { icon: SiPython, color: "#3776AB" },
  react: { icon: SiReact, color: "#61DAFB" },
  tensorflow: { icon: SiTensorflow, color: "#FF6F00" },
  pytorch: { icon: SiPytorch, color: "#EE4C2C" },
  opencv: { icon: SiOpencv, color: "#5C3EE8" },
  flask: { icon: SiFlask, color: "#FFFFFF" },
  "node-js": { icon: SiNodedotjs, color: "#339933" },
  html: { icon: SiHtml5, color: "#E34F26" },
  css: { icon: SiCss, color: "#1572B6" },
  mysql: { icon: SiMysql, color: "#4479A1" },
  mongodb: { icon: SiMongodb, color: "#47A248" },
  git: { icon: SiGit, color: "#F05032" },
  github: { icon: SiGithub, color: "#FFFFFF" },
  pandas: { icon: SiPandas, color: "#150458" },
  numpy: { icon: SiNumpy, color: "#013243" },
  "scikit-learn": { icon: SiScikitlearn, color: "#F7931E" },
  javascript: { icon: SiJavascript, color: "#F7DF1E" },
};

export function hasSkillIcon(name) {
  return !!icons[name?.toLowerCase()];
}

export default function SkillIcon({
  name,
  size = 18,
  className = "",
}) {
  const entry = icons[name?.toLowerCase()];

  if (!entry) return null;

  const Icon = entry.icon;

  return (
    <Icon
      size={size}
      color={entry.color}
      className={className}
    />
  );
}