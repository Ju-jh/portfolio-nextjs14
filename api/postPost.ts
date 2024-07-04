export const postPosts = async (title: string, content: string, router:any) => {

      await fetch('/api/post', {
        method: 'POST',
        headers: {
        'Content-Type' : 'application/json'
        },
        body: JSON.stringify({title, content})
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        if (response.ok) {
          console.log('완료..!')
          router.push('/post')
        }
        return response.json();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
};