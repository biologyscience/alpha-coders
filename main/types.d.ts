type BySortOptions =
{
    /**
     * Height of the wallpaper in pixels.
     */
    height: Number;

    /**
     * Filter out with respect to the Height and Width.
     */
    operator: Operator;

    /**
     * Different sets of results.
     */
    page: Number;

    /**
     * [Min, Max] ratios of the wallpaper size. Applicable only to 'phone' type.
     */
    ratio: [Number, Number];

    /**
     * Type of the device.
     */
    type: DeviceType;

    /**
     * Width of the wallpaper in pixels.
     */
    width: Number;
};

/**
 * Type of the device.
 */
type DeviceType = 'desktop' | 'phone';

type File =
{
    /**
     * Size of the file in MegaBytes (MB)
     */
    size: Number;

    /**
     * Type of the file.
     */
    type: 'jpg' | 'png' | String;
};

type GetWallpapersOptions =
{
    /**
     * Height of the wallpaper in pixels.
     */
    height: Number;

    /**
     * Filter out with respect to the Height and Width.
     */
    operator: Operator;

    /**
     * Different sets of results.
     */
    page: Number;

    /**
     * [Min, Max] ratios of the wallpaper size. Applicable only to 'phone' type.
     */
    ratio: [Number, Number];

    /**
     * A sorting method.
     */
    sort: Sort;

    /**
     * Type of the device.
     */
    type: DeviceType;

    /**
     * Width of the wallpaper in pixels.
     */
    width: Number;
};

type List =
{
    /**
     * ID of the Category or Sub-Category.
     */
    id: Number;

    /**
     * Name of the Category or Sub-Category.
     */
    name: String;

    wallpaperCount:
    {
        /**
         * Number of wallpapers for desktop devices.
         */
        desktop: Number;

        /**
         * Number of wallpapers for mobile devices.
         */
        phone: Number;
    }
};

type NameID =
{
    /**
     * ID of the preceding object.
     */
    id?: Number;

    /**
     * Name of the preceding object.
     */
    name?: String | null;
};

/**
 * Filter out with respect to the Height and Width.
 */
type Operator = 'min' | 'max' | 'equal';

type QueryCount =
{
    /**
     * Percentage of the API calls used.
     */
    percentUsed: String;

    /**
     * Number of used API calls.
     */
    used: Number;

    /**
     * Number of unused API calls.
     */
    unused: Number;
};

/**
 * Sorting methods.
 */
type Sort = 'newest' | 'rating';

type URL =
{
    /**
     * Link to the image.
     */
    image: String;

    /**
     * Link to the thumbnail version of the image.
     */
    thumbnail: String;

    /**
     * Link to the webpage where the image is held.
     */
    webpage: String;
};

type Wallpaper =
{
    file: File;
    url: URL;
    user: NameID;

    /**
     * Height of the wallpaper in pixels.
     */
    height: Number;

    /**
     * ID of the wallpaper.
     */
    id: Number;

    /**
     * Width of the wallpaper in pixels.
     */
    width: Number;

    category:
    {
        /**
         * ID of the category.
         */
        id: Number;

        /**
         * Name of the category.
         */
        name: String;

        /**
         * Sub-Category of the Wallpaper.
         */
        sub: NameID;
    };
};

type WallpaperInfo =
{
    /**
     * Tags of the wallpaper
     */
    tags: Array<NameID>;

    wallpaper: Wallpaper;
};

declare class Alpha
{
    constructor(apiToken: String);

    /**
     * Get Lists
     */
    getList:
    {
        /**
         * Get the list of Categories used on Wallpaper Abyss.
         */
        ofCategory(): Promise<Array<List>>;

        /**
         * Get the list of Sub-Categories in a given Category.
         * @param id ID of a Category.
         * @param page Which set of results to be obtained (1 - 200)
         */
        ofSubCategory(id: Number, page?: Number): Promise<Array<List>>;
    };

    /**
     * Get wallpapers
     */
    getSpecificWallpapers:
    {
        /**
         * Get an array of random wallpapers in a specific sort.
         * @param sorting A sorting method.
         * @param options Optional parameters.
         */
        bySort(sorting: Sort, options?: BySortOptions): Promise<Array<Wallpaper> | null>;

        /**
         * Gets an Array of wallpapers belonging to a single Category.
         * @param id ID of the category.
         * @param options Optional parameters.
         */
        fromCategory(id: Number, options?: GetWallpapersOptions): Promise<Array<Wallpaper> | null>;

        /**
         * Gets an Array of wallpapers belonging to a single Sub-Category.
         * @param id ID of the Sub-Category.
         * @param options Optional parameters.
         */
        fromSubCategory(id: Number, options?: GetWallpapersOptions): Promise<Array<Wallpaper> | null>;

        /**
         * Gets an Array of wallpapers belonging to a single Tag.
         * @param id ID of the Tag.
         * @param options Optional parameters.
         */
        fromTag(id: Number, options?: GetWallpapersOptions): Promise<Array<Wallpaper> | null>;
    };

    /**
     * Get an array of random wallpapers.
     * @param device Type of the device.
     */
    getRandomWallpapers(device?: DeviceType): Promise<Array<Wallpaper>>;

    /**
     * Get a specific Wallpaper with its Tags.
     * @param id ID of the wallpaper.
     */
    getWallpaper(id: Number): Promise<WallpaperInfo | null>;

    /**
     * Get Wallpapers matching a given search term.
     * @param term The search term used for the matching. (MAX 128 Characters)
     * @param options Optional Parameters.
     */
    search(term: String, options?: BySortOptions): Promise<Array<Wallpaper> | null>;

    /**
     * Get the API calls associated with the API key.
     */
    queryCount(): Promise<QueryCount>;
}

export = Alpha;