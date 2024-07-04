export const getGoogleAuthCode = async (code:string) => {

  await fetch('https://oauth2.googleapis.com/token', {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          credentials: 'include',
          body: `code=${code}&client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&client_secret=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_PASSWORD}&redirect_uri=http://localhost:3000/&grant_type=authorization_code`,
        })
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          console.log('Success:', data);
          localStorage.setItem('signupData', JSON.stringify(data));
        })
        .catch((error) => {
          console.error('Error:', error);
        });
};