// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { MovieData } from "../../types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<MovieData>
) {
  // const promise = new Promise((resolve, reject) => {
  // 	const { collection } = req.body;
  // 	const content = 'all';

  axios
    .get(
      `
    https://api.themoviedb.org/3/${req.body.collection}/${req.body.content}/week?api_key=14f42019af4f87a6c1044e9f7c093828`
    )
    .then((response) => {
      res.status(200).send(response?.data?.results);
    })
    .catch((err) => {
      console.log(err);
    });

  // promise
  // 	.then((response) => {
  // 		res.status(200).send(response);
  // 	})
  // 	.catch((err) => {
  // 		res.status(404);
  // 		console.log(err);
  // 	});
}
