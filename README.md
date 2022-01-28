# aotalro-product-card

Este es un paquete de pruebas de despliegue en NPM

### Andres Otalvaro

## Ejemplo

```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from 'aotalro-product-card'
```

```
<ProductCard 
    product={ product }
    initialValues={{
        count: 6,
        // maxCount: 10,
    }}
>
    {
        ({ reset, count, isMaxCountReached, maxCount, increaseBy  }) => (
            <>
                <ProductImage/>
                <ProductTitle />
                <ProductButtons/>
                
            </>
        )
    }
</ProductCard>
```