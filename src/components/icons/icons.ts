import BiomedicalIcon from "./biomedical";
import ChemicalIcon from "./chemical";
import CivilIcon from "./civil";
import ComputerIcon from "./computer";
import ElectricalIcon from "./electrical";
import MechanicalIcon from "./mechanical";
import MechatronicsIcon from "./mechatronics";
import ScienceIcon from "./science";
import SoftwareIcon from "./software";
import StructuralIcon from "./structural";

export const IconRegistry = {
    Biomedical: BiomedicalIcon,
    Chemical: ChemicalIcon,
    Civil: CivilIcon,
    Computer: ComputerIcon,
    Electrical: ElectricalIcon,
    Mechanical: MechanicalIcon,
    Mechatronics: MechatronicsIcon,
    Science: ScienceIcon,
    Software: SoftwareIcon,
    Structural: StructuralIcon
} as const

export type IconName = keyof typeof IconRegistry;