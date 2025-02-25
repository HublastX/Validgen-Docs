import type { ReactNode } from "react";
import clsx from "clsx";
import style from "./styles.module.css";

type CanDoItem = {
    title: string;
    link: string;
};

const canDoList: CanDoItem[] = [
    { title: "Validate CPF", link: "docs/CPF/ValidateCPF" },
    { title: "Format CPF", link: "/docs/CPF/FormatCPF" },
    { title: "Generate CPF", link: "/docs/CPF/GenerateCPF" },
    { title: "Unformat CPF", link: "/docs/CPF/UnformatCPF" },
    { title: "Format Generated CPF", link: "/docs/CPF/FormatGeneratedCPF" },
];

function CanDoItem({ title, link }: CanDoItem) {
    return (
        <a href={link} className={clsx(style.canDiiItem, "zoom")}>
           {title}
        </a>
    );
}

export default function Homecando(): ReactNode {
    return (
        <div className={clsx(style.homecando, "container--flex")}>
            <h1>Explore more!</h1>
            <div className="container-flex row ju" style={{width: "70%", justifyContent: "center"}}>
                {canDoList.map((item, index) => (
                    <CanDoItem key={index} {...item} />
                ))}
            </div>
            <h2>Come and learn more about each of them</h2>
            <p>By clicking on the items, you will discover how to use them.</p>
        </div>
    );
}
