import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import RTL from "../src/RTL";





const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        position:'relative',
        display:'flex',
        justifyContent:'center'

    },



    paper: {
        position:'absolute',
        width:1000,
        height:650,



    },



    img: {
        margin: theme.spacing(1),
        display: 'block',
        Width: '100',
        Height: '100',
    },







    textfield: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    buttonaply:{
        margin: theme.spacing(1),
        position:"relative",
        right:80,
        top:10,
    },
    grid: {
        width:"240px",
        height:"170px",
        display: 'block',
    },

    img1: {
        height: "100%",
        overflow: 'hidden',
        display: 'block',
        width: 270,
        margin: 'auto',


    },
    card: {

    borderRadius:"25px",
        flexDirection:'row',
        display: 'flex',
        position:'relative',
        margin:theme.spacing(2,2,1,2),
    },
    font: {
        position:'relative',
        flexDirection:'row'

    },
    font1: {
        position:'absolute',
        left:80,
        flexDirection:'column'

    },
    font2: {
        display:'flex',
        position:'absolute',
       margin:theme.spacing(4,1,3,0),
       left:400

    },
    font3: {
        display:'flex',
        position:'absolute',
        margin:theme.spacing(3,1,3,0),
        right:20

    },
    button2: {
        display:'flex',
        position:'absolute',

        right:20

    },
}));



function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}










export default function ComplexGrid() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <RTL>
            <Paper className={classes.paper}>





                <Card elevation={4} className={classes.card}>

                    <Grid container className={classes.grid}>

                        <img className={classes.img1} alt="food2" src="food1.jpg"/>


                    </Grid>
                    <div className={classes.font}>
                        <div className={classes.font1}>
                            <Typography  style={{fontSize:30,margin:theme.spacing(2,1,4,0)}}>سالمون </Typography>

                        </div>
                        <div className={classes.font2}>
                            <Typography > 25000تومان  </Typography>
                        </div>
                    </div>
                    <div className={classes.font3}>
                    <IconButton   variant="contained"  color="secondary" className={classes.button}>
                        <DeleteIcon />
                    </IconButton>

                    </div>
                    <Typography style={{margin:theme.spacing(13,2,1,6,)}}>
                        ماهی کباب شده یا پخته شده هم ایده ی خوبی است. از ماهی های روغنی، مثل سالمون، تون یا ساردین اجتناب نکنید.
                        چربی آن ها برای پوست، مو و بینایی شما سلامتی آور است.
                        همچنین شما را برای مدت زمان طولانی تری سیر نگه می دارند </Typography>


                </Card>

                <Card elevation={4} className={classes.card}>

                    <Grid container className={classes.grid}>

                        <img className={classes.img1} alt="food2" src="food2.jpg"/>


                    </Grid>
                    <div className={classes.font}>
                        <div className={classes.font1}>
                            <Typography  style={{fontSize:30,margin:theme.spacing(2,1,4,0)}}>بوریتو </Typography>

                        </div>
                        <div className={classes.font2}>
                            <Typography > 20000تومان  </Typography>
                        </div>
                    </div>
                    <div className={classes.font3}>
                        <IconButton   variant="contained"  color="secondary" className={classes.button}>
                            <DeleteIcon />
                        </IconButton>
                    </div>
                    <Typography style={{margin:theme.spacing(13,1,1,45,)}}>
                        این نوع صبحانه مقدار زیادی پروتئین در اختیار شما قرار می دهد
                    </Typography>


                </Card>

                <Card elevation={4} className={classes.card}>

                    <Grid container className={classes.grid}>

                        <img className={classes.img1} alt="food3" src="food3.jpg"/>


                    </Grid>
                    <div className={classes.font}>
                        <div className={classes.font1}>
                            <Typography  style={{fontSize:30,margin:theme.spacing(2,1,4,0)}}>کیک </Typography>

                        </div>
                        <div className={classes.font2}>
                            <Typography > 15000تومان  </Typography>
                        </div>
                    </div>
                    <div className={classes.font3}>
                        <IconButton   variant="contained"  color="secondary" className={classes.button}>
                            <DeleteIcon />
                        </IconButton>
                    </div>
                    <Typography style={{margin:theme.spacing(12,1,4,7)}}>
                        امروزه اکثر مردم علاقه دارند کیک و
                        شیرینی های مختلف را در خانه تهیه کنند تا از کیفیت و
                        سلامت آن مطمئن باشند.این کیکی که ارائه میدهیم کاملا رژیمی و سالم است .چربی استفاده شده در آن مفید و شیرینی موجود در آن حداقل شکر را دارد. </Typography>


                </Card>









                <Grid item>
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button2}
                    startIcon={<DeleteIcon />}
                >
                    خالی کردن سبد
                </Button>
                </Grid>

                <ExpansionPanel style={{top:50}}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>قیمت نهایی :900000ریال</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Grid item xs container direction="column" spacing={1}>
                            <Grid item xs>
                                <Typography gutterBottom  className={classes.context4}   variant="subtitle1">
                                    قیمت کل:500000 ریال
                                </Typography>
                                <Typography  className={classes.context4}  variant="body2" gutterBottom>
                                 مالیات : 200000 ریال
                                </Typography>
                            </Grid>
                        </Grid>
                        <form className={classes.textfield} noValidate autoComplete="off">
                        <TextField id="standard-search" label="کد تخفیف" type="search"  />
                            <Button className={classes.buttonaply} variant="contained" style={{color:'#fff' ,backgroundColor:"#65ccb8"}} onClick={handleClick}>
                                اعمال کد
                            </Button>
                            <Snackbar open={open} autoHideDuration={6000}  onClose={handleClose}>
                                <Alert onClose={handleClose} style={{color:'#fff' ,backgroundColor:"#65ccb8"}} severity="success">
                                    با موفقیت ثبت شد
                                </Alert>
                            </Snackbar>
                        </form>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </Paper>

            </RTL>
        </div>


    );
}