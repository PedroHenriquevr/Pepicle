import ButtonSide from "./ButtonSide";
import filtros from './filtros.json'
import { IconType } from "react-icons";

type IOpcao = typeof filtros[0]

export default function SideBar() {
    return (
        <div className="h-[100vh] w-fit">
            {filtros.map((opcao: IOpcao) => {
                const Icon = opcao.icon as unknown as IconType;
                console.log("Icon:", Icon); // Adicione este log para depurar
                return (
                    <ButtonSide Icon={Icon} key={opcao.id}>
                        {opcao.label}
                    </ButtonSide>
                );
            })}
        </div>
    );
}
