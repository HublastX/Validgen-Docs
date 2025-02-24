import type { ReactNode } from "react";
import clsx from "clsx";
import style from "./styles.module.css";

export default function Homecando(): ReactNode {
    return (
        <div className={clsx(style.homecando, "container--flex")}>
            <h1 className="hero__title">Conheça mais!</h1>
            <div className="container-flex row">
              {/* caixinhas */}
            </div>
        </div>
    );
}
