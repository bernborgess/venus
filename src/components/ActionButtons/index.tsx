import { Edit as EditIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export function ActionButtons({ id }: { id: number }) {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`${id}`)}>
      <EditIcon />
    </div>
  );
}

