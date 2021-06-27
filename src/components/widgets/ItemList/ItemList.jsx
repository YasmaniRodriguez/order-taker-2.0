import React, { useContext } from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import { BusinessContext } from '../../contexts/BusinessContext.js';
import { Grid } from '@material-ui/core';
import { Item } from '../Item/Item.jsx';
/*
Este es un componente contenedor de segundo nivel y su responsabilidad es fitrar 
los Productos disponibiizaos en el BusinessContext y pasarselos por array.map() y props 
al componente dummy encargado de la visualizacion.
*/
export const ItemList = ({ onlyShowCategory }) => {

    const classes = useStyles();

    const { availableProducts } = useContext(BusinessContext);

    const filterProducts = () => {
        return onlyShowCategory !== undefined ? availableProducts.filter(product => product.category === onlyShowCategory) : availableProducts;
    }

    const products = filterProducts();
    
    return (
        <>
        {products.length === 0 ? (<div className={classes.loadingContainer}><Typography className={classes.loadingText} variant="h3">Cargando...</Typography></div>) : (
            <Grid container spacing={10} justify="center">
            {
                products.map((product, i) =>
                <React.Fragment key={i}>
                    <Item index={i} {...product}/>
                </React.Fragment>)
            }
        </Grid> 
        )}
        </>
    )      
}

const useStyles = makeStyles((theme) => ({
    loadingContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'  
    },
    loadingText: {
        fontFamily: 'Ranchers'
    }
}));