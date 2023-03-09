import React from "react";
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { cardData,Links  } from "../../data";



const Index = () => {

   

     

    return ( 
        <section id="meprojects" className="justify-center bg-background py-6 flex items-center w-full ">
            <div className="justify-center w-5/6 h-5/6 flex items-center ">
              <div className="w-full flex-col mb-3 justify-center flex items-center">
                 <div className="justify-center  w-full flex items-center">
                    <h1 className="font-semibold mb-[30px]   text-fontprimary text-[40px]">Projects portfolio</h1>
                 </div>
                 <div className="justify-center items-center w-full">
                 <Grid justifyContent="center"
                      container
                      spacing={2}>
                    {cardData.map((card) => (
                        <Grid display="flex" justifyContent="center" item xs={12} sm={6} md={4}>
                            <Card onClick={Links}  sx={{ maxWidth: 345, backgroundColor: '#1f3950'}}>
                              <CardActionArea>
                                 <CardMedia
                                  image={card.Project}
                                  component="img"
                                  height="140"
                                  alt="Project"
                                />
                                <CardContent>
                                  <Typography className="text-fontprimary" gutterBottom variant="h5" component="div">
                                   {card.title}
                                  </Typography>
                                  <Typography className="text-fontsecondary" variant="body2" >
                                    {card.content}
                                  </Typography>
                                </CardContent>
                              </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                 </Grid>
                 </div>
              </div>
            </div>
        </section>
     );
}
 
export default Index;
