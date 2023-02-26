import {
  Alert,
  AlertColor,
  AlertProps,
  Snackbar
} from "@mui/material";
import {
  AxiosError,
  isAxiosError
} from "axios";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useState
} from "react";
import { z, ZodError } from "zod";

export type SupportedError =
  AxiosError | ZodError | Error;

export function isSupportedError(candidate: unknown)
  : candidate is SupportedError {
  if (isAxiosError(candidate))
    return true;
  if (candidate instanceof z.ZodError)
    return true;
  if (candidate instanceof Error)
    return true;
  return false;
}

interface NotificationState {
  notify: (err: unknown) => void,  // "error"
  prompt: (msg: string) => void,   // "success"
  inform: (msg: string) => void,   // "info"
  warn: (msg: string) => void,     // "warning"
}

const NotificationContext =
  createContext<NotificationState | undefined>(undefined);

//////////////////////////////////////////////////////////

type Props = {
  message: string,
  severity: AlertProps["severity"],
  dismiss: () => void,
  isOpen: boolean
}

function Notification({
  message,
  severity,
  dismiss,
  isOpen
}: Props) {

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={10000}
      onClose={dismiss}
      message={message}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right"
      }}
    >
      <Alert
        elevation={6}
        variant="filled"
        severity={severity}
      >
        {message}
      </Alert>
    </Snackbar>
  );

}

//////////////////////////////////////////////////

const NotificationProvider = ({ children }:
  PropsWithChildren) => {

  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [severity, setSeverity] = useState<AlertProps["severity"]>();
  const [message, setMessage] = useState("");

  function notify(err: unknown) {
    setSeverity("error");

    if (isSupportedError(err)) {
      if (isAxiosError(err))
        setMessage(err.message);
      else if (err instanceof z.ZodError)
        setMessage(err.issues[0].message);
      else
        setMessage(err.message);

      setIsNotificationOpen(true);
    }
    else {
      console.error(err);
    }
  }

  function sendMessage(msg: string, severity: AlertColor) {
    setSeverity(severity);
    setMessage(msg);
    setIsNotificationOpen(true);
  }

  // "success" | "info" | "warning" | "error"
  function prompt(msg: string) {
    sendMessage(msg, "success");
  }

  function inform(msg: string) {
    sendMessage(msg, "info");
  }

  function warn(msg: string) {
    sendMessage(msg, "warning");
  }


  return (
    <NotificationContext.Provider value={{ notify, prompt, inform, warn }}>
      <Notification
        message={message}
        severity={severity}
        dismiss={() => setIsNotificationOpen(false)}
        isOpen={isNotificationOpen}
      />
      {children}
    </NotificationContext.Provider>
  );

};

function useNotification() {
  const context = useContext(NotificationContext);
  if (context === undefined)
    throw new Error("useNotification must be within NotificationProvider");
  return context;
}

export { NotificationProvider, useNotification };
