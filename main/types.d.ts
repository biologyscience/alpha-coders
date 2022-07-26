type sort = 'newest' | 'rating' | 'views' | 'favorites'
type operator = 'min' | 'max' | 'equal'
type fileType = 'jpg' | 'png' | String
type level = 1 | 2 | 3

type url =
{
    image: String;
    thumbnail: String;
    webpage: String;
}

type bySortOptions =
{
    level: level;
    page: Number;
    width: Number;
    height: Number;
    operator: operator;
}

type getWallpapers =
{
    id: String;
    width: String;
    height: String;
    fileType: fileType;
    fileSize: String;
    url: url;
    category?: { name: String; id: String; };
    subCategory?: { name: String; id: String; }
    user?: { name: String; id: String; }
    collection?: { name: String | null; id: String | null; };
    group?: { name: String | null; id: String | null; };
}

type getWallpapersOptions =
{
    level: level;
    sort: sort;
    page: Number;
    width: Number;
    height: Number;
    operator: operator;
}

type countOptions =
{
    width: Number;
    height: Number;
    operator: operator;
}

type list =
{
    id: Number;
    name: String;
    count: Number;
    url: String;
}

type wallpaper = 
{
    id: String;
    name: String | null;
    featured: Boolean | null;
    width: String;
    height: String;
    fileType: fileType;
    fileSize: String;
    url: url;
    category: { name: String; id: String; };
    subCategory: { name: String; id: String; };
    user: { name: String; id: String; };
    collection: { name: String | null; id: String | null; };
    group: { name: String | null; id: String | null; };
}

type wallpaperInfo =
{
    wallpaper: wallpaper;
    tag: Array<{ id: Number; name: String; }>;
}

type randomOptions =
{
    count: Number;
    level: level;
}

type queryCount =
{
    currentMonth:
    {
        count: Number;
        price: Number | Float64Array;
    };

    previousMonth:
    {
        count: Number;
        price: Number | Float64Array;
    }
}

declare class Alpha
{
    constructor(apiToken: String);

    /**
     * Get wallpapers
     */
    getWallpapers:
    {
        /**
         * Returns an Array of wallpapers by the given sort type.
         * @param sorting A sorting method.
         * @param options Optional parameters
         */
        bySort(sorting: sort, options?: bySortOptions): Promise<Array<getWallpapers>>;

        /**
         * Returns an Array of wallpapers belonging to a single Category.
         * @param id ID of the category.
         * @param options Optional parameters
         */
        fromCategory(id: Number, options?: getWallpapersOptions): Promise<Array<getWallpapers>>;

        /**
         * Returns an Array of wallpapers belonging to a single Collection.
         * @param id ID of the collection.
         * @param options Optional parameters
         */
        fromCollection(id: Number, options?: getWallpapersOptions): Promise<Array<getWallpapers>>;

        /**
         * Returns an Array of wallpapers belonging to a single Group.
         * @param id ID of the group.
         * @param options Optional parameters
         */
        fromGroup(id: Number, options?: getWallpapersOptions): Promise<Array<getWallpapers>>;

        /**
         * Returns an Array of wallpapers belonging to a single Sub-Category.
         * @param id ID of the Sub-Category.
         * @param options Optional parameters
         */
        fromSubCategory(id: Number, options?: getWallpapersOptions): Promise<Array<getWallpapers>>;

        /**
         * Returns featured Wallpapers.
         * @param options Optional Parameters
         */
        fromFeatured(options?: getWallpapersOptions): Promise<Array<getWallpapers>>;

        /**
         * Returns recently popular Wallpapers.
         * @param options Optional Parameters
         */
        fromPopular(options?: getWallpapersOptions): Promise<Array<getWallpapers>>;

        /**
         * Returns an Array of wallpapers belonging to a single Tag.
         * @param id ID of the Tag.
         * @param options Optional parameters
         */
        fromTag(id: Number, options?: getWallpapersOptions): Promise<Array<getWallpapers>>;

        /**
         * Returns an Array of wallpapers uploaded by a single User.
         * @param id ID of the User.
         * @param options Optional parameters
         */
        fromUser(id: Number, options?: getWallpapersOptions): Promise<Array<getWallpapers>>;
    };

    /**
     * Get wallpapers Count
     */
    getWallpaperCount:
    {
        /**
         * Returns the count of Wallpapers present all over on Wallpaper Abyss.
         * @param options Optional parameters
         */
        inEntireDB(options?: countOptions): Promise<String>;

        /**
         * Returns the count of Wallpapers in a given Category.
         * @param id ID of the Category.
         * @param options Optional parameters
         */
        inCategory(id: Number, options?: countOptions): Promise<String>;

        /**
         * Returns the count of Wallpapers in a given Collection.
         * @param id ID of the Collection.
         * @param options Optional parameters
         */
        inCollection(id: Number, options?: countOptions): Promise<String>;

        /**
         * Returns the count of Wallpapers in a given Group.
         * @param id ID of the Group.
         * @param options Optional parameters
         */
        inGroup(id: Number, options?: countOptions): Promise<String>;

        /**
         * Returns the count of Wallpapers in a given Sub-Category.
         * @param id ID of the Sub-Category.
         * @param options Optional parameters
         */
        inSubCategory(id: Number, options?: countOptions): Promise<String>;

        /**
         * Returns the count of Featured Wallpapers.
         * @param options Optional Parameters
         */
        inFeatured(options?: countOptions): Promise<String>;

        /**
         * Returns the count of recently Popular Wallpapers.
         * @param option Optional Parameters
         */
        inPopular(option?: countOptions): Promise<String>;

        /**
         * Returns the count of Wallpapers tagged with a given Tag.
         * @param id ID of the Tag.
         * @param options Optional parameters
         */
        inTag(id: Number, options?: countOptions): Promise<String>;

        /**
         * Returns the count of Wallpapers submitted a given User.
         * @param id ID of the User.
         * @param options Optional parameters
         */
        inUser(id: Number, options?: countOptions): Promise<String>;
    };

    getList:
    {
        /**
         * Returns the list of Categories used on Wallpaper Abyss.
         */
        ofCategory(): Promise<Array<list>>;

        /**
         * Returns the list of Collections used on Wallpaper Abyss.
         */
        ofCollection(): Promise<Array<list>>;

        /**
         * Returns the list of Groups in a given Collection.
         * @param id ID of a Collection.
         */
        ofGroup(id: Number): Promise<Array<list>>;

        /**
         * Returns the list of Sub-Categories in a given Category.
         * @param id ID of a Category.
         */
        ofSubCategory(id: Number): Promise<Array<list>>;
    };

    /**
     * Returns Wallpapers matching a given search term.
     * @param term The search term used for the matching. (MAX 128 Characters)
     * @param options Optional Parameters
     */
    search(term: String, options?: bySortOptions): Promise<Array<getWallpapers>>;

    /**
     * Returns advanced information about a Wallpaper.
     * @param id ID of the wallpaper.
     */
    getWallpaperInfo(id: Number): Promise<wallpaperInfo>;

    /**
     * Returns a fixed amount of random wallpapers.
     * @param options Optional Parameters
     */
    getRandomWallpaper(options?: randomOptions): Promise<Array<getWallpapers>>;

    /**
     * Returns the API calls and pricing associated with an API key.
     */
    queryCount(): Promise<queryCount>;
}

export = Alpha;