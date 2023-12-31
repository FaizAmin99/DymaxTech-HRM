import { Card, Typography, CardMedia, Grid, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useAuth } from "../../utils/context/AuthContext";

export default function WelcomeCard() {
  const { userData } = useAuth();
  const RootStyle = styled(Card)(({ theme }) => ({
    boxShadow: "none",
    textAlign: "center",
    padding: theme.spacing(16, 4),
    color: theme.palette.secondary.darker,
    backgroundColor: theme.palette.secondary.lighter,
  }));
  return (
    <RootStyle>

{ <Typography variant="h4">Welocome User!</Typography> }

    {userData && (

        
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          
        >
          <Grid item xs={100} lg={6}>
            <Grid container direction="column" justifyContent="flex-start">
              <Grid item>
                <Typography variant="h4">
                  Welcome {userData.FirstName}!
                </Typography>

                { <Typography variant="h4">HR !</Typography> }
              </Grid>

              <Grid item sx={{ pt: 1, pb: 1 }}>
                <Typography variant="h1">
                  Start managing your employees from anywhere!
                </Typography>
              </Grid>

              <Grid item sx={{ p: 1 }}>
                <Button variant="contained">Discover</Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6} lg={6}>
            <Grid container direction="row" justifyContent="flex-end">
              <CardMedia
                component="img"
                sx={{ width: 200 }}
                image="/images/Online presentation_Monochromatic.png"
                alt="Logo"
              />
            </Grid>
          </Grid>
        </Grid>
      )}
    </RootStyle>
  );
}
