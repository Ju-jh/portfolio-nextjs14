export const getPosts = async (setPosts:any) => {

      await fetch('/api/post', {
        method: 'GET',
        headers: {
        'Content-Type' : 'application/json'
        },
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setPosts(data.posts);
      })
        .catch((error) => {
          console.error('Error:', error);
        });
};