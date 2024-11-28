const divWrapper = document.createElement('div')
divWrapper.classList.add('divBox');
document.body.appendChild(divWrapper);

fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(cartsObjects => {
        const {carts} = cartsObjects;
        console.log(carts);

        for (const cart of carts) {

            const divBox = document.createElement('div');
            divWrapper.append(divBox)
            divBox.innerText=`"id":${cart.id}
            'Total Products':${cart.totalProducts},
            'user Id':${cart.userId},
            'Total':${cart.total},
            'Discounted Total':${cart.discountedTotal},
            'Total Quantity':${cart.totalQuantity} 
            `;
            const ol = document.createElement('ol');

            divBox.append(ol)

            for (const product of cart.products) {
                const li = document.createElement('li')

                li.innerText = `
                'id':${product.id},
                'title':${product.title},
                'price':${product.price},
                'quantity':${product.quantity},
                'discountPercentage':${product.discountPercentage},
                'discountedTotal':${product.discountedTotal},
                'total':${product.total}`;

                const pict = document.createElement('img');
                pict.src = product.thumbnail;

                ol.append(li,pict)
            }
        }
    });
