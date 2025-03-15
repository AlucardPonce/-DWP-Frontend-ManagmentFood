import React from 'react';
import Options from './components/optionbar';
import Bto from './components/button';
import './components/styles/styles.css'

const Sucursal = () => {
    return (
        <div>
            <div className='titulo'><h2>Sucursales</h2></div>
            <div className='content'>
                <div class="parent">
                    <div class="div1"><h2>Seleccione un Municipio:</h2>
                        <Options placeholder="Seleccione un municipio por favor" label1="Querétaro" label2="Chihuahua"></Options></div>
                    <div class="div2"><h2>Seleccione un Estado:</h2>
                        <Options placeholder="Seleccione un municipio por favor" label1="Querétaro" label2="Chihuahua"></Options></div>
                    <div class="div3" >
                        <table class="tg"><thead>
                            <tr>
                                <th class="tg-0lax">NO.</th>
                                <th class="tg-0lax">MUNICIPIO</th>
                                <th class="tg-0lax">ESTADO</th>
                                <th class="tg-0lax">COLONIA</th>
                                <th class="tg-0lax">CP</th>
                                <th class="tg-0lax">Numero</th>
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

export default Sucursal;