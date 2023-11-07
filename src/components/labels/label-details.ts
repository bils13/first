import RequiredMask from "../../assets/required-mask.png"
import RecommendedMask from "../../assets/recommended-mask.png"
import RequiredTowel from "../../assets/required-towel.png"
import RecommendedTowel from "../../assets/recommended-towel.png"
import PartialFountain from "../../assets/partial-fountain.png"
import ForbiddenFountain from "../../assets/forbidden-fountain.png"
import RequiredLockerroom from "../../assets/required-lockerroom.png"
import PartialLockerroom from "../../assets/partial-lockerroom.png"
import ForbiddenLockerroom from "../../assets/forbidden-lockerroom.png"

export const LabelDetails = [
    {
        'key': "mask",
        'title': "Máscara",
        'icon': 
            [
                {
                    'image': RequiredMask, 
                    'text': 'Obrigatório o uso de máscara',
                    'legend': "Obrigatório"
                },
                {
                    'image': RecommendedMask,
                    'text': 'Recomendado o uso de máscara',
                    'legend': "Recomendado"
                }
            ]
    },   
    {
        'key': "towel",
        'title': "Toalha",
        'icon': 
            [
                {
                    'image': RequiredTowel, 
                    'text': 'Obrigatório o uso de toalha',
                    'legend': "Obrigatório"
                },
                {
                    'image': RecommendedTowel,
                    'text': 'Recomendado o uso de toalha',
                    'legend': "Recomendado"
                }
            ]
    }, 
    {
        'key': "fountain",
        'title': "Bebedouro",
        'icon': 
            [
                {
                    'image': PartialFountain, 
                    'text': 'Uso parcial do bebedouro',
                    'legend': "Parcial"
                },
                {
                    'image': ForbiddenFountain,
                    'text': 'Uso proibido do bebedouro',
                    'legend': "Proibido"
                }
            ]
    },   
    {
        'key': "lockerroom",
        'title': "Vestiário",
        'icon': 
            [
                {
                    'image': RequiredLockerroom, 
                    'text': 'Uso liberado do vestiário',
                    'legend': "Liberado"
                },
                {
                    'image': PartialLockerroom, 
                    'text': 'Uso parcial do vestiário',
                    'legend': "Parcial"
                },
                {
                    'image': ForbiddenLockerroom, 
                    'text': 'Uso proibido do vestiário',
                    'legend': "Proibido"
                },
            ]
    }
]