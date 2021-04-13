import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) =>
    createStyles({
        appBar: {
            position: 'relative',
        },
        title: {
            marginLeft: theme.spacing(2),
            flex: 1,
        },
        buttonDiv: {
            textAlign: 'center'
        },
        paper: {
            position: 'absolute',
            width: 400,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
        divCon: {
            textAlign: 'center',
            outline: 'none'
        },
        root: {
            flexGrow: 1,
            height: '80%',
            align: 'center',
            marginTop: 150
        },
        paperGrid: {
            height: 240,
            width: 200,
        },
        control: {
            padding: theme.spacing(2),
        },
        buttonGroup: {
            marginTop: 100
        },
        button: {
            border: 'solid 1px black'
        }
    }),
);
