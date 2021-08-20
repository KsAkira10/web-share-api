import { Card, CardContent, CardActions, IconButton } from "@material-ui/core";
import { Share } from "@material-ui/icons";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const getFilename = (path: string): string => {
  const splitted = path?.split("/");
  return splitted[splitted?.length - 1];
};

const urlToFile = async (url: string, filename: string) => {
  const response = await fetch(url);

  const blob = await response.blob();

  return new File([blob], filename, {
    type: blob.type,
  });
};

const src = "/imgs/images.jpeg";

const shareData = {
  text: "Text",
  title: "Title",
  url: src,
};

const Home: NextPage = () => {
  const share = async () => {
    try {
      const file = await urlToFile(shareData.url, getFilename(shareData.url));
      const files = [file];

      if (navigator?.canShare && navigator?.canShare({ files })) {
        await navigator.share({ ...shareData, files });
      } else {
        await navigator.share({ ...shareData });
      }
    } catch (error) {
      if (error.name != "AbortError") alert(error.message);
      console.error(error.name, error.message, error.stack);
    }
  };
  const handleOnClick = () => {
    share();
  };
  return (
    <>
      <Head>
        <title>Web Share API - Level 2</title>
        <meta
          name="description"
          content="POC to validate Web Share API in iOS15"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Card
        style={{
          width: "300px",
          height: "auto",
        }}
      >
        <CardContent style={{ padding: 0 }}>
          <Image
            src={src}
            alt="Acessórios para eles"
            width={300}
            height={569}
          />
        </CardContent>
        <CardActions>
          <IconButton onClick={handleOnClick}>
            <Share />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
};

export default Home;
