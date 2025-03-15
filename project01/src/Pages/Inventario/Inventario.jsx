import React from 'react';
import Options from './components/optionbar';
import Bto from './components/button';
import './components/styles/styles.css'

const Inventario = () => {
    return (
        <div>
            <div className='titulo'><h2>Inventario de Querétaro</h2></div>
            <div className='content'>
                <div class="parent">
                    <div class="div2"><h2>Seleccione una categoria:</h2>
                        <Options placeholder="Seleccione un municipio por favor" label1="Comida rápida" label2="Combo 1"></Options></div>
                    <div class="div3" >
                        <table class="tg"><thead>
                            <tr>
                                <th class="tg-0lax">NO.</th>
                                <th class="tg-0lax">Nombre del producto</th>
                                <th class="tg-0lax">Cantidad</th>
                                <th class="tg-0lax">Precio</th>
                                <th class="tg-0lax">Existencias</th>
                                <th class="tg-0lax">Activo</th>
                                <th class="tg-0lax">ACCIONES</th>
                            </tr></thead>
                            <tbody>
                                <tr>
                                    <td class="tg-0lax"></td>
                                    <td class="tg-hmp3"></td>
                                    <td class="tg-0lax"></td>
                                    <td class="tg-hmp3"></td>
                                    <td class="tg-0lax"></td>
                                    <td class="tg-hmp3"></td>
                                    <td class="tg-0lax"></td>
                                </tr>
                                <tr>
                                    <td class="tg-0lax"></td>
                                    <td class="tg-hmp3"></td>
                                    <td class="tg-0lax"></td>
                                    <td class="tg-hmp3"></td>
                                    <td class="tg-0lax"></td>
                                    <td class="tg-hmp3"></td>
                                    <td class="tg-0lax"></td>
                                </tr>
                                <tr>
                                    <td class="tg-0lax"></td>
                                    <td class="tg-hmp3"></td>
                                    <td class="tg-0lax"></td>
                                    <td class="tg-hmp3"></td>
                                    <td class="tg-0lax"></td>
                                    <td class="tg-hmp3"></td>
                                    <td class="tg-0lax"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="div4"><Bto label="Agregar sucursal" ></Bto></div>
                </div>
            </div>
        </div>
    );
};

export default Inventario;