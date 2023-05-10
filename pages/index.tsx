import { useEffect, useState } from "react";
import Head from "next/head";
import { GetStaticProps, NextPage } from "next";
import axios from "axios";

import Navbar from "../components/Navbar/Navbar";
import Thumbnail from "../components/Thumbnail/Thumbnail";
import { MovieData, Tab } from "../types";
import styles from "../styles/Home.module.css";
import Tabs from "../components/Tabs/Tabs";
import MovieBoard from "../components/MovieBoard/MovieBoard";
import Table from "../components/Table/Table";

interface Props {
  data: Array<MovieData>;
}

const Home: NextPage<Props> = ({ data }) => {
  const collections: Tab[] = [
    { key: "trending", displayText: "Trending Now" },
    { key: "upcoming", displayText: "Coming Soon" },
    { key: "", displayText: "Best of 2022" },
  ];

  const [selectedCollection, setSelectedCollection] = useState(collections[0]);
  const [selectedMovie, setSelectedMovie] = useState(data[0]);
  const [pageData, setPageData] = useState(data);

  useEffect(() => {
    console.log(data);
  }, []);

  const handleTabSelection = (tab: Tab) => {
    setSelectedCollection(tab);
    getCollectionData(tab.key);
  };

  const handleThumbnailClick = (movie: MovieData) => {
    setSelectedMovie(movie);
  };

  const getCollectionData = async (collection: string) => {
    console.log("we are here", collection);
    const res = await axios.get(`/api/all/${collection}`);

    setPageData(res.data);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>FlixList</title>
        <meta
          name="description"
          content="Movie reviews spoken from the heart"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <div className="collection-zone my-10 mx-auto py-8 w-fit">
        <Tabs
          tabItems={collections}
          activeTab={selectedCollection}
          onTabChange={handleTabSelection}
        />
        <div className="flex gap-6">
          <MovieBoard movie={selectedMovie} />
          <div className="poster-grid grid grid-cols-2 grid-rows-2 items-center justify-center gap-6">
            {pageData?.slice(0, 4).map((movie: MovieData) => (
              <Thumbnail
                movie={movie}
                size="md"
                className="cursor-pointer hover:opacity-90"
                key={movie["title"]}
                onClick={handleThumbnailClick}
              />
            ))}
          </div>
        </div>
        <Table data={data} displayHeaders={["original_title", ""]} />
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<{
  data: MovieData[];
}> = async () => {
  let data: MovieData[] = [];

  const res = await axios
    .get(
      "https://api.themoviedb.org/3/trending/all/week?api_key=14f42019af4f87a6c1044e9f7c093828"
    )
    .then((res) => {
      data = res.data.results;
    })
    .catch((err) => console.log(err));

  return {
    props: {
      data: data,
    },
  };
};

export default Home;
