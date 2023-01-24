import { FlatList } from "react-native";
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from './../components/CategoryGridTile';


//컴포넌트 렌더링 때마다 재생성할 필요가 없으므로 컴포넌트 밖에서 정의한 거임
function renderCategoryItem(itemData) {
    return <CategoryGridTile title={itemData.item.title} color={itemData.item.color}/>;
}


function CategoriesScreen() {
    return (
        <FlatList 
            data={CATEGORIES} 
            keyExtractor={(item) => item.id} 
            renderItem={renderCategoryItem}
        />
    )
}

export default CategoriesScreen;