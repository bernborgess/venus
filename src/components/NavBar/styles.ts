import { styled } from "@mui/material";

export const UserDataList =
  styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    marginTop: 100
  }));

export const UserDataCard =
  styled("div")(({ theme }) => ({
    width: "80%",
    background: "var(--app-beige)",
    borderRadius: 80,
    height: 40,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    color: "var(--app-laranja)",
    paddingLeft: 5,
    position: "relative"
  }));

export const UserAvatar =
  styled("span")(({ theme }) => ({
    background: "white",
    width: 25,
    height: 25,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    marginRight: 10
  }));

export const UserLabel =
  styled("span")(({ theme }) => ({
    maxWidth: "110px",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
    maxLines: 1
  }));

export const UserSettingsButton =
  styled("span")(({ theme }) => ({
    width: 25,
    height: 25,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    marginLeft: "auto",
    marginRight: 10,
    cursor: "pointer"
  }));

export const UserModalContainer =
  styled("div")(({ theme }) => ({
    top: 50,
    left: 20,
    width: 168,
    height: 71,
    position: "absolute",
    borderRadius: 10,
    boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.28)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    color: "gray"
  }));

export const UserModalButton =
  styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    paddingLeft: 10,
    cursor: "pointer"
  }));

export const UserModalLabel =
  styled("div")(({ theme }) => ({
    marginLeft: 7,
  }));
