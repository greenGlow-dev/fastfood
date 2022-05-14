import Generic from "../page/Generic"
import{ReactComponent as mahsulotlar} from '../assets/icons/arxiv.svg';
import {ReactComponent as filiallar} from '../assets/icons/filiallar.svg';
import {ReactComponent as katalog} from '../assets/icons/katalog.svg';
import {ReactComponent as mijozlar} from '../assets/icons/mijozlar.svg';
import {ReactComponent as xisobot} from '../assets/icons/xisobot.svg'
import {ReactComponent as buyurtmalar}  from '../assets/icons/buyurtmalar.svg';
import {ReactComponent as kategoriyalar}  from '../assets/icons/kategoriyalar.svg';
import{ReactComponent as hodimlar}  from '../assets/icons/hodimlar.svg';

export const sidebar  = [
    {
    id:1,
    path:'buyurtmalar',
    title: 'Buyurtmalar',
    Icon: buyurtmalar,
    Component: Generic,
    hidden:false,

},
{
    id:2,
    path:'mahsulotlar',
    title: 'Mahsulotlar',
    Icon: mahsulotlar,
    Component: Generic,
    hidden:false,

},
{
    id:3,
    path:'kategoriyalar',
    title: 'Kategoriyalar',
    Icon: kategoriyalar,
    Component: Generic,
    hidden:false,

},
{
    id:4,
    path:'filiallar',
    title: 'Filiallar',
    Icon: filiallar,
    Component: Generic,
    hidden:false,

},
{
    id:5,
    path:'mijozlar',
    title: 'Mijozlar',
    Icon: mijozlar,
    Component: Generic,
    hidden:false,

},
{
    id:6,
    path:'xisobot',
    title: 'Xisobot',
    Icon: xisobot,
    Component: Generic,
    hidden:false,

},
{
    id:7,
    path:'hodimlar',
    title: 'Hodimlar',
    Icon: hodimlar ,
    Component: Generic,
    hidden:false,

},
{
    id:8,
    path:'katalog',
    title: 'Katalog',
    Icon: katalog,
    Component: Generic,
    hidden:false,

}

]