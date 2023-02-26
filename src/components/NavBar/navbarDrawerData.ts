import {
  Build as BuildIcon,
  InsertDriveFile as InsertDriveFileIcon,
  Person as PersonIcon
} from "@mui/icons-material";

import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

type MuiIcon = OverridableComponent<
  SvgIconTypeMap<unknown, "svg">>
  & {
    muiName: string;
  }

export type UserRole = "artist" | "admin"
  | "user" | "member";

type Drawer = {
  title: string,
  path: string,
  icon: MuiIcon,
  cName: string,
  userRoles: UserRole[]
}

export const navbarDrawerData
  : Drawer[] = [
    {
      title: "Projetos",
      path: "/",
      icon: BuildIcon,
      cName: "nav-text",
      userRoles: ["user", "member", "admin"]
    },
    {
      title: "Contratos",
      path: "/contracts",
      icon: InsertDriveFileIcon,
      cName: "nav-text",
      userRoles: ["member", "admin"]
    },
    {
      title: "Usuários",
      path: "/users",
      icon: PersonIcon,
      cName: "nav-text",
      userRoles: ["member", "admin"]
    },
  ];