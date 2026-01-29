import { asyncHandler } from "../utils/asyncHandler.js";
import axios from "axios";
import { githubApi } from "../api/axios.js";

export const getCommit = asyncHandler(async (req, res) => {
  const commit = {
    repoName: "",
    message: "",
    date: "",
  };

  const response_eventapi = await axios.get(
    "https://api.github.com/users/aalampatil/events/public",
  );

  const data = response_eventapi.data[0];
  const repoUrl = data.repo.url;
  const response_commitApi = await axios.get(`${repoUrl}/commits?per_page=1`);
  const commit_data = response_commitApi.data;
  

  commit.repoName = data.repo.name;
  commit.message = commit_data[0].commit.message;
  commit.date = commit_data[0].commit.committer.date;

  return res.status(200).json({ commit, success: true });
});

