import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { EmailForm, SelectLanguage } from 'enl-components';
import logo from 'enl-images/logo.svg';
import ArrowBack from '@material-ui/icons/ArrowBack';
import styles from 'enl-components/Forms/user-jss';
import { FormattedMessage } from 'react-intl';
import { loginWithEmail } from 'enl-redux/actions/authActions';
import messages from './messages';



const ConfirmEmail = (props) => {

    const { classes, handleLogin } = props;
    const title = brand.name + ' - Confirm Email';
    const description = brand.desc;
    const [valueForm, setValueForm] = useState(null);


    return (
        <div className={classes.rootFull}>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="twitter:title" content={title} />
                <meta property="twitter:description" content={description} />
            </Helmet>
            <div className={classes.containerSide}>
                <Hidden smDown>
                    <div className={classes.opening}>
                        <div className={classes.openingWrap}>
                            <div className={classes.openingHead}>
                                <NavLink to="/" className={classes.brand}>
                                    <img src={logo} alt={brand.name} />
                                    {brand.name}
                                </NavLink>
                            </div>
                            <Typography variant="h3" component="h1" gutterBottom>
                                <FormattedMessage {...messages.welcomeTitle} />
                                &nbsp;
                                {brand.name}
                            </Typography>
                            <Typography variant="h6" component="p" className={classes.subpening}>
                                <FormattedMessage {...messages.welcomeSubtitle} />
                            </Typography>
                        </div>
                        <div className={classes.openingFooter}>
                            <NavLink to="/" className={classes.back}>
                                <ArrowBack />
                                &nbsp;back to site
                            </NavLink>
                            <div className={classes.lang}>
                                <SelectLanguage />
                            </div>
                        </div>
                    </div>
                </Hidden>
                <div className={classes.sideFormWrap}>
                    {/* <LoginFormFirebase onSubmit={(values) => submitForm(values)} /> */}
                    <EmailForm />
                </div>
            </div>
        </div>
    )
}



ConfirmEmail.propTypes = {
    classes: PropTypes.object.isRequired,
    // handleLogin: PropTypes.func.isRequired,
};



const LoginWrap = (props) => {
    const { handleLoginWithEmail } = props;
    const LoginStyled = withStyles(styles)(ConfirmEmail);
    return (
        <LoginStyled handleLogin={handleLoginWithEmail} />
    );
}

LoginWrap.propTypes = {
    handleLoginWithEmail: PropTypes.func.isRequired,
};

// const reducer = 'authReducer';
const mapStateToProps = state => ({
    // state: state.get(reducer)
});

const mapDispatchToProps = dispatch => ({
    handleLoginWithEmail: bindActionCreators(loginWithEmail, dispatch)
});

const LoginMapped = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginWrap);

export default LoginMapped;


