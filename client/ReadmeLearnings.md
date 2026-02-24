# This file is to note the learnings while working on this project

### 20 Feb

## API-CALLS learnt a better way for an api call to handle error, this will avoid memory leak in case of a failed req/umountes request or an unhandles promise req

```useEffect(() => {
let isMounted = true;

const cachedVisits = localStorage.getItem("visits");
if (cachedVisits) {
setVisit(JSON.parse(cachedVisits));
}

const loadVisits = async () => {
try {
const response = await axios.get("/api/features/get-visitor-count");

      if (response.data.success && isMounted) {
        localStorage.setItem("visits", JSON.stringify(response.data.visits));
        setVisit(response.data.visits);
      }
    } catch (error) {
      console.error(error);
    }

};

loadVisits();

return () => {
isMounted = false;
};
}, []);
```
