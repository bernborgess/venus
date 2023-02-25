import {
  Alert,
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
  notify: (err: unknown) => void,
  prompt: (msg: string) => void
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
  const [severity, setSeverity] = useState<AlertProps["severity"]>("warning");
  const [message, setMessage] = useState("");

  function notify(err: unknown) {
    setSeverity("warning");

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

  function prompt(msg: string) {
    setSeverity("success");
    setMessage(msg);
    setIsNotificationOpen(true);
  }


  return (
    <NotificationContext.Provider value={{ notify, prompt }}>
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
