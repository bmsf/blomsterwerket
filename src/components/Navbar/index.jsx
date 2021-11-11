import React from 'react';
import { useState } from 'react';
import {
	AppBar,
	Toolbar,
	IconButton,
	Badge,
	Typography,
	Divider,
} from '@material-ui/core';
import {
	LocalMallOutlined,
	Menu,
	Close,
	KeyboardArrowRight,
	// Facebook,
	// PersonOutlineRounded,
	// PhoneOutlined,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';

import useStyles from './styles';

const Navbar = ({ totalItems }) => {
	const classes = useStyles();
	const [openMenu, setOpenMenu] = useState(false);

	const handleClick = () => {
		setOpenMenu(!openMenu);
	};

	if (openMenu) {
		document.body.style.overflow = 'hidden';
	} else {
		document.body.style.overflow = 'unset';
	}

	return (
		<>
			<AppBar position='fixed' className={classes.appBar} color='inherit'>
				<Toolbar className={classes.toolBar}>
					<IconButton onClick={handleClick}>
						{openMenu ? <Close /> : <Menu className={classes.menuButton} />}
					</IconButton>

					<Link to='./'>
						<div className={classes.logoDivMobile}>
							<Typography
								variant='h4'
								style={{
									fontFamily: 'Roseritta',
									fontWeight: 'bold',
									margin: '0',
									padding: '0',
								}}
							>
								B
							</Typography>
							<Typography
								variant='h4'
								style={{
									fontFamily: 'Roseritta',
									fontWeight: 'bold',
									position: 'relative',
									top: '8px',
								}}
							>
								W
							</Typography>
						</div>
					</Link>
					<nav className={classes.desktopNav}>
						<ul className={classes.navLinks}>
							<li className={classes.li}>
								<Link to='/' class='aNavbar'>
									Hjem
								</Link>
							</li>
							<li>
								<Link to='/shop' class='aNavbar'>
									Butikk
								</Link>
							</li>

							<Link to='./'>
								<div className={classes.logoDiv}>
									<Typography
										variant='h4'
										style={{
											fontFamily: 'Roseritta',
											fontWeight: 'bold',
											margin: '0',
											padding: '0',
										}}
									>
										B
									</Typography>
									<Typography
										variant='h4'
										style={{
											fontFamily: 'Roseritta',
											fontWeight: 'bold',
											paddingTop: '5px',
										}}
									>
										W
									</Typography>
								</div>
							</Link>

							<li>
								<Link to='/anledninger' class='aNavbar'>
									Anledninger
								</Link>
							</li>
							<li>
								<Link to='/svar' class='aNavbar'>
									Spørsmål
								</Link>
							</li>
						</ul>
					</nav>
					<div>
						<IconButton
							component={Link}
							to='/cart'
							aria-label='Show cart items'
							color='inherit'
						>
							<Badge badgeContent={totalItems} color='primary'>
								<LocalMallOutlined />
							</Badge>
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
			{openMenu && (
				<div
					className={classes.containerMobileMenu}
					onClick={() => setOpenMenu(false)}
				>
					<ul className={classes.openMobileMenu} data-aos='fade-right'>
						<Link to='./'>
							<li>
								<div>Hjem</div>
								<IconButton>
									<KeyboardArrowRight />
								</IconButton>
							</li>
						</Link>
						<Divider />
						<Link to='/shop'>
							<li onClick={handleClick}>
								<div>Butikk</div>
								<IconButton>
									<KeyboardArrowRight />
								</IconButton>
							</li>
						</Link>
						<Divider />
						<Link to='/anledninger'>
							<li>
								<div>Anledninger</div>
								<IconButton>
									<KeyboardArrowRight />
								</IconButton>
							</li>
						</Link>
						<Divider />
						<Link to='/svar'>
							<li>
								<div>Spørsmål</div>
								<IconButton>
									<KeyboardArrowRight />
								</IconButton>
							</li>
						</Link>
						<Divider />
					</ul>
					{/* <div className={classes.container}>
            <PersonOutlineRounded
              style={{ fontSize: "30px", paddingRight: "10px" }}
            />
            <div>Sign In</div>
          </div>
          <div className={classes.container}>
            <PhoneOutlined style={{ fontSize: "30px", paddingRight: "10px" }} />
            <div>+47 123 456 789</div>
          </div> */}
				</div>
			)}
		</>
	);
};

export default Navbar;
