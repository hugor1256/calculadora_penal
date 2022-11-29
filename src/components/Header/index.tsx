import React from 'react';

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Header = () => (
		<AppBar color="primary" position="static">
			<Toolbar>
				<Typography
						variant="h5"
						component="div"
						sx={{flexGrow: 1}}
				>
					Calculadora Penal
				</Typography>
				{/* Add logo */}
			</Toolbar>
		</AppBar>
);

export default Header;