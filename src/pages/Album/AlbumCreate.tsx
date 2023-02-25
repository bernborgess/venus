import { Button } from "@mui/material";
import { FormEvent, useState } from "react";
import { AlbumForm } from "../../components/Forms/AlbumForm";
import { AlbumSchema, emptyAlbum, newAlbum } from "../../constants/album";
import { useNotification } from "../../context/notification";
import { useRouting } from "../../routes/useRouting";
import { useApi } from "../../services";

export function AlbumCreate() {

  const { addAlbum } = useApi();
  const { navigateToAllAlbums } = useRouting();
  const { notify, prompt } = useNotification();

  const [album, setAlbum] = useState(emptyAlbum);

  function updateAlbum(partialAlbum: Partial<newAlbum>) {
    if (!album) return;
    setAlbum({ ...album, ...partialAlbum });
  }

  async function onSubmit(
    event: FormEvent<HTMLFormElement>,
    newAlbum: newAlbum
  ) {
    event.preventDefault();
    try {
      AlbumSchema.parse(newAlbum);
      await addAlbum(newAlbum);
      prompt("Novo Álbum Criado com sucesso!");
      navigateToAllAlbums();
    } catch (err: unknown) {
      notify(err);
    }
  }

  return (
    <div>
      <AlbumForm
        title="Novo Album"
        album={album}
        updateAlbum={updateAlbum}
        onSubmit={onSubmit}
      >
        <Button
          type="submit"
          variant="contained"
        >
          Criar
        </Button>
      </AlbumForm>
    </div >
  );
}