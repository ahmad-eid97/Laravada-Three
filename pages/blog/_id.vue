<template>
  <div class="">
    <app-blog-heading></app-blog-heading>
    <div class="blog-details-area pt-100 pb-70">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <app-blog-body :blogDetails="blogDetails"></app-blog-body>
          </div>
          <div class="col-lg-4">
            <app-blog-side-archive
              :blogDetails="blogDetails"
            ></app-blog-side-archive>
            <app-blog-side-blogs
              :latestBlogs="latestBlogs"
            ></app-blog-side-blogs>
            <app-blog-side-tags :blogDetails="blogDetails"></app-blog-side-tags>
            <app-blog-gallery :blogDetails="blogDetails"></app-blog-gallery>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppBlogBody from "../../components/blog/AppBlogBody.vue";
import AppBlogSideBlogs from "../../components/blog/AppBlogSideBlogs.vue";
import AppBlogHeading from "../../components/blog/AppBlogHeading.vue";
import AppBlogSideTags from "../../components/blog/AppBlogSideTags.vue";
import AppBlogGallery from "../../components/blog/AppBlogGallery.vue";
import AppBlogSideArchive from "../../components/blog/AppBlogSideArchive.vue";
export default {
  components: {
    AppBlogHeading,
    AppBlogBody,
    AppBlogSideBlogs,
    AppBlogSideTags,
    AppBlogGallery,
    AppBlogSideArchive,
  },
  async asyncData({ $axios, params }) {
    const blogDetails = await $axios.get(`/blogs/${params.id}`);

    const latestBlogs = await $axios.get(`/blogs?latest=1`);

    return {
      blogDetails: blogDetails.data.data,
      latestBlogs: latestBlogs.data.data,
    };
  },
};
</script>

<style></style>
