import { asyncHandler } from "../utils/asyncHandler.js";
import axios from "axios";

export const getCommit = asyncHandler(async (req, res) => {
  const commit = {
    repoName: "",
    message: "",
    date: "",
  };

  const { data: events } = await axios.get(
    "https://api.github.com/users/aalampatil/events/public",
  );

  const pushEvent = events.find((event) => event.type === "PushEvent");

  if (!pushEvent) {
    return res.status(404).json({ message: "No push events found" });
  }

  const repoUrl = pushEvent.repo.url;

  const { data: commits } = await axios.get(`${repoUrl}/commits?per_page=1`);

  commit.repoName = pushEvent.repo.name;
  commit.message = commits[0].commit.message;
  commit.date = commits[0].commit.committer.date;

  return res.status(200).json({commit, success: true});
});

// import { asyncHandler } from "../utils/asyncHandler.js";
// import axios from "axios";
// export const getCommit = asyncHandler(async (req, res) => {
//const commit = {repoName: "", message: ""}
//const githubEventResponse = await axios.get("https://api.github.com/users/aalampatil/events/public")
//const response = githubEventResponse.data[0].repo;

//const getCommitResponse = await axios.get(${response.url}/commits/main)
//const data = getCommitResponse.data
//console.log(data); commit.repoName = response.name
//commit.message = data.commit.message;
//console.log(commit)
//return res.send(commit)
//});
