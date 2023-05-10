// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { MovieData } from "../../../types";

type List = {
  [key: string]: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<MovieData[]>
) {
  const promise = new Promise((resolve, reject) => {
    const content = "all";

    const urls: List = {
      trending: `${process.env.API_PATH}/trending/all/week?api_key=${process.env.API_KEY}&page1`,
      upcoming: `${process.env.API_PATH}/movie/upcoming?api_key=${process.env.API_KEY}&language=en-US&page=1`,
    };

    axios
      .get(urls[`${req.query.collection}`])
      .then((response: MovieData[] | any) => {
        resolve(response?.data?.results);
      })
      .catch((err) => {
        reject(err);
        console.log(err);
      });
  });

  promise
    .then((response: MovieData[] | any) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      res.status(404);
      console.log(err);
    });
}
