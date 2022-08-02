import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import authService from "@/services/auth.service";
import { Button, Card, Grid, Spacer, Text, Input } from "@nextui-org/react";
import { useRouter } from "next/router";
import AuthDialog from "@/components/AuthDialog/AuthDialog";
import Seo from "@/components/Seo";

function Login() {
  const router = useRouter();
  const handleClose = (e) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <>
      <Seo templateTitle="Login" />
      <div className="h-screen bg-footer-b-background bg-cover">
        <Grid.Container
          direction="row"
          className="h-screen w-screen"
          justify="center"
          alignContent="center"
        >
          <div className="w-full m-3 max-w-md md:max-w-lg lg:max-w-xl">
            <AuthDialog onClose={handleClose} section={"login"} />
          </div>
        </Grid.Container>
      </div>
    </>
  );
}

export default Login;
