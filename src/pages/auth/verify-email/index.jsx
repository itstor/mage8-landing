import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import authService from "@/services/auth.service";
import { Grid, Text } from "@nextui-org/react";

function VerifyEmail({ success }) {
  if (typeof window !== "undefined") {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && success) {
      const newUser = user;
      newUser.user.isEmailVerified = true;
      localStorage.setItem("user", JSON.stringify(newUser));
    }
  }

  return (
    <>
      <Seo templateTitle="Verify Email" />
      <div className="h-screen bg-footer-b-background bg-cover">
        <Navbar />
        {success ? (
          <Grid.Container
            direction="row"
            className="h-screen"
            justify="center"
            alignContent="center"
          >
            <Text
              css={{
                textGradient: "45deg, $blue600 -20%, $green600 50%",
              }}
              weight="bold"
              className="animate-text text-2xl lg:text-6xl  text-center"
            >
              Terima kasih,&nbsp;
            </Text>
            <Text className="text-2xl lg:text-6xl text-center">
              email kamu sudah terverifikasi
            </Text>
          </Grid.Container>
        ) : (
          <Grid.Container
            direction="column"
            className="h-screen"
            justify="center"
            alignContent="center"
          >
            <Grid.Container
              direction="row"
              justify="center"
              alignContent="center"
            >
              <Text
                css={{
                  textGradient: "45deg, $red600 -20%, $purple600 50%",
                }}
                weight="bold"
                className="animate-text text-2xl lg:text-6xl  text-center"
              >
                Maaf,&nbsp;
              </Text>
              <Text className="text-2xl lg:text-6xl text-center">
                token kamu sudah tidak berlaku
              </Text>
            </Grid.Container>
          </Grid.Container>
        )}
        <Footer />
      </div>
    </>
  );
}

export async function getServerSideProps({ query }) {
  const token = query.token;

  if (!token) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
      props: {},
    };
  }

  let success = true;
  try {
    await authService.verifyEmailByToken(token);
  } catch (error) {
    success = false;
  }

  return { props: { success } };
}

export default VerifyEmail;
