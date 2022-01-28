import * as React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard, ProductImage } from '../../src/components'
import { product2 } from '../data/products';

describe('Pruebas en el ProductImage', () => {
  
    test('debe de mostrar el componente correcto con la imagen personalizado', () => {
        
        const wrapper = renderer.create(
            <ProductImage img="algo.jpg"/>
        );

        expect(wrapper.toJSON()).toMatchSnapshot();        
    });

    test('debe mostrar el componente con la imagen del producto', () => {

        const wrapper = renderer.create(
            <ProductCard product={product2}>
                {
                    () => (
                        <ProductImage/>
                    )
                }
            </ProductCard>
        );

        expect(wrapper.toJSON()).toMatchSnapshot(); 
    });

});
