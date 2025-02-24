import type { ReactNode } from "react";
import clsx from "clsx";
import style from "./styles.module.css";

type CanDoItem = {
    title: string;
    link: string;
};

const canDoList: CanDoItem[] = [
    { title: "Feature One", link: "/" },
    { title: "Feature Two", link: "/" },
    { title: "Feature Three", link: "/" },
    { title: "Feature Four", link: "/" },
    { title: "Feature Five", link: "/" },
    { title: "Feature Six", link: "/" },
    { title: "Feature Seven", link: "/" },
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
            <h1>Conheça mais!</h1>
            <div className="container-flex row ju" style={{width: "70%", justifyContent: "center"}}>
                {canDoList.map((item, index) => (
                    <CanDoItem key={index} {...item} />
                ))}
            </div>
            <h2>Venha conhecer mais sobre cada um deles</h2>
            <p>clicando nos itens voce pode testalos ou sla oq mais</p>
        </div>
    );
}
