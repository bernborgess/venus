import { Button } from "@mui/material";
import { FormEvent, useState } from "react";
import { AlbumForm } from "../../components/Forms/AlbumForm";
import { emptyAlbum, newAlbum } from "../../constants/album";
import { useNotification } from "../../context/notification";
import { useApi } from "../../services";

export function AlbumCreate() {

  const {
    addAlbum
  } = useApi();

  const { notify, prompt } = useNotification();

  const [album, setAlbum] = useState(emptyAlbum);

  function updateAlbum(partialAlbum: Partial<newAlbum>) {
    if (!album)
      return;
    setAlbum({ ...album, ...partialAlbum });
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>, newAlbum: newAlbum) {
    event.preventDefault();
    try {
      //! MAY KABOOM
      // TODO: Validate newAlbum with zod
      await addAlbum(newAlbum);
      prompt("Novo Albuma Criado com sucesso!");
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
        >
          Criar
        </Button>
      </AlbumForm>
    </div >
  );
}