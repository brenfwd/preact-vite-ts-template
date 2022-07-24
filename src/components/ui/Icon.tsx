import cx from "classnames";
import { JSXInternal } from "preact/src/jsx";
import { ComponentChildren } from "preact";

import { createAsyncHook } from "../../utils/asyncHook";

import "material-symbols/rounded.scss";
import "./Icon.scss";

async function loadMaterialSymbols() {
  await document.fonts.load("1em Material Symbols Rounded");
  return true;
}

const useMaterialSymbols = createAsyncHook(loadMaterialSymbols);

export type IconProps = ({ children: string } | { icon: string }) & {
  fallback?: ComponentChildren;
} & JSXInternal.HTMLAttributes<HTMLSpanElement>;

export function Icon(props: IconProps) {
  const { children, fallback, icon, class: clazz, ...rest } = props;

  const materialSymbols = useMaterialSymbols();
  if (materialSymbols.pending || !materialSymbols.data) {
    return fallback ? (
      <>{fallback}</>
    ) : (
      <span class={cx("select-none p-3", clazz)} {...rest}>
        &nbsp;
      </span>
    );
  }

  return (
    <span class={cx("material-symbols-rounded select-none", clazz)} {...rest}>
      {icon ?? children}
    </span>
  );
}
