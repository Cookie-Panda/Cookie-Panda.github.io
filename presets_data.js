/**
 * DECORATIVE PRESETS DATA
 * This file contains only the content definitions.
 */

const DECORATIVE_PRESETS_DATA = [
    {
        id: "cat_trees",
        name: "Trees & Vegetation test",
        items: [
            {
                id: "tree_oak_large",
                name: "Large Oak Trees",
                description: "Adds large vanilla oak trees.",
                tags: ["has_oak_trees", "forest"], 
                files: [
                    //Example { src: "presets/trees/oak.json", dest: "features/oak.json" }
                ] 
            },
            {
                id: "tree_birch_tall",
                name: "Tall Birch Trees test",
                description: "Forest-style tall birch generation.",
                tags: ["has_birch_trees"],
                files: [] 
            },
            {
                id: "flowers_poppy",
                name: "Poppy Patch",
                description: "Dense patches of poppies.",
                tags: ["flower_forest"],
                files: []
            }
        ]
    },
    {
        id: "cat_structures",
        name: "Structures test",
        items: [
            {
                id: "struct_ruins",
                name: "Ancient Ruins",
                description: "Small stone ruins.",
                tags: ["has_ruins"],
                files: []
            }
        ]
    }
];