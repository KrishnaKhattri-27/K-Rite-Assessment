import { IoMdCode } from "react-icons/io";
import { MdDesignServices } from "react-icons/md";
import { CiBullhorn } from "react-icons/ci";

const TeamData = [
  {
    logo: <MdDesignServices size={21}/>,
    name: "Design Team",
    shortcut: "X+1",
  },
  {
    logo: <CiBullhorn size={21}/>,
    name: "Marketing Team",
    shortcut: "X+2",
  },
  {
    logo: <IoMdCode size={21}/>,
    name: "Development Team",
    shortcut: "X+3",
  },
];

export default TeamData;
