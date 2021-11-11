import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	toolbar: theme.mixins.toolbar,

	main: {
		backgroundColor: '#F5FAFD',
		margin: '0',
		padding: '0',
		width: '100%',
		height: '100%',
	},

	//Frontpage top section

	frontPageDiv: {
		display: 'flex',
		justifyContent: 'space-around',
		[theme.breakpoints.down('xs')]: {
			flexDirection: 'column',
			alignItems: 'center',
		},
	},

	socialButtons: {
		display: 'flex',
		flexDirection: 'column',
		height: '100vh',
		justifyContent: 'center',
		paddingBottom: theme.spacing(10),
		[theme.breakpoints.down('xs')]: {
			display: 'none',
		},
	},
	socialButton: {
		fill: '#121c25',
	},

	roundedImgFrontpage: {
		width: '22%',
		objectFit: 'contain',
		[theme.breakpoints.down('xs')]: {
			minWidth: '40%',
			marginBottom: theme.spacing(2),
		},
	},
	textDivFrontpage: {
		width: '55%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignContent: 'center',
		paddingRight: theme.spacing(20),
		[theme.breakpoints.down('xs')]: {
			width: '100%',
			paddingRight: '0',
		},
	},
	headerFrontpageTop: {
		display: 'flex',
		fontSize: '8vw',
		fontFamily: 'Roseritta',
		textTransform: 'none',
		[theme.breakpoints.down('xs')]: {
			fontSize: '10vw',
			justifyContent: 'center',
			margin: '0',
		},
	},
	headerFrontpage: {
		display: 'flex',
		justifyContent: 'flex-end',
		fontSize: '8vw',
		fontFamily: 'Roseritta',
		textTransform: 'none',
		[theme.breakpoints.down('xs')]: {
			justifyContent: 'center',
			fontSize: '12vw',
			position: 'relative',
			left: '15%',
		},
	},

	shopNow: {
		justifyContent: 'center',
		width: '50%',
		alignItems: 'center',
		[theme.breakpoints.down('xs')]: {},
	},

	shopNowText: {
		fontFamily: 'Jost',
	},

	//About us

	aboutUsSection: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignContent: 'center',
		paddingBottom: theme.spacing(15),
		[theme.breakpoints.down('xs')]: {
			paddingTop: theme.spacing(10),
		},
	},
	utsidebutikk: {
		objectFit: 'contain',
		position: 'relative',
		width: '40%',
		alignSelf: 'flex-end',
		borderTopLeftRadius: '500px',
		borderBottomLeftRadius: '500px',
		marginTop: '40px',
		[theme.breakpoints.down('md')]: {
			width: '35%',
		},
		[theme.breakpoints.down('xs')]: {
			display: 'none',
		},
	},
	aboutUsTextContainer: {
		position: 'relative',
		left: '15%',
		width: '40%',
		[theme.breakpoints.down('xs')]: {
			width: '60%',
			marginTop: '15px',
		},
	},
	aboutUsHeader: {
		fontSize: '5vw',
		fontFamily: 'Roseritta',
		textTransform: 'none',
		[theme.breakpoints.down('xs')]: {
			fontSize: '8vw',
		},
	},
	aboutParagraph: {
		fontFamily: 'Jost',
	},

	//Best sellers
	gridContainer: {
		maxWidth: '65%',
		marginTop: theme.spacing(5),
		[theme.breakpoints.down('sm')]: {
			maxWidth: '90%',
		},
	},
	root: {
		maxWidth: '100%',
		backgroundColor: '#F5FAFD',
		cursor: 'pointer',
		margin: '10px',
	},
	media: {
		height: '330px',
		// 16:9
		width: '100%',
		borderTopLeftRadius: '150px',
		borderTopRightRadius: '150px',
		[theme.breakpoints.up('xs')]: {
			height: '120px',
		},
		[theme.breakpoints.up('md')]: {
			height: '250px',
		},
	},

	bestSellerSection: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		alignContent: 'center',
	},

	cardContent: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexWrap: 'wrap',
		paddingTop: '5px',
		paddingLeft: '0',
		paddingRight: '0',
	},

	bodyText: {
		fontFamily: 'Jost',
		fontSize: '12px',
	},
	shopNowBestSellers: {
		display: 'flex',
		justifyContent: 'flex-end',
		width: '70%',
		alignItems: 'center',
		[theme.breakpoints.down('xs')]: {
			width: '100%',
			paddingRight: theme.spacing(3),
		},
	},

	contentStyle: {
		height: '160px',
		color: '#fff',
		lineHeight: '160px',
		textAlign: 'center',
		background: '#364d79',
	},

	//Abonnement

	sub: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingTop: theme.spacing(10),
		paddingBottom: theme.spacing(10),
	},

	category: {
		fontFamily: 'Jost',
		fontSize: '2vw',
		borderBottom: '1px solid #121c25',
		[theme.breakpoints.down('xs')]: {
			fontSize: '5vw',
		},
	},
	deliveryPrize: {
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2),
		fontFamily: 'Jost',
		fontSize: '1vw',
		fontWeight: 'bold',
		[theme.breakpoints.down('xs')]: {
			fontSize: '3vw',
		},
	},
	subContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		width: '50%',
		[theme.breakpoints.down('xs')]: {
			width: '100%',
		},
	},

	//Newsletter
	newsletter: {
		display: 'flex',
		backgroundColor: '#D0DAE3',
		height: '300px',
		padding: theme.spacing(5),
	},
	textDiv: {
		maxWidth: '50%',
		paddingLeft: theme.spacing(10),
		[theme.breakpoints.down('sm')]: {
			paddingLeft: '0',
		},
	},
	inputDiv: {
		display: 'flex',
		flexDirection: 'column',
		width: '50%',
		alignContent: 'center',
		paddingLeft: theme.spacing(20),
		[theme.breakpoints.down('sm')]: {
			width: '90%',
			paddingLeft: theme.spacing(5),
		},
	},
	input: {
		height: '40px',
		paddingLeft: theme.spacing(2),
		width: '70%',
		[theme.breakpoints.down('sm')]: {
			width: '100%',
		},
	},
	submitButton: {
		width: '70%',
		[theme.breakpoints.down('sm')]: {
			width: '100%',
		},
	},
	//share on socials
	shareOnSocials: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: theme.spacing(2),
	},
	img: {
		objectFit: 'contain',
		width: '100px',
	},
}));
