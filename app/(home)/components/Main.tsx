'use client';

import styles from '../css/Main.module.css';
import useSearchPost from '@/hook/useSearchPost';
import SearchInput from './SearchInput';
import PostList from './PostList';
import { useQuery } from '@tanstack/react-query';
import getPostList from '@/utils/getPostList';
import { Post, TagField } from '@/app/type';
import Loading from '../loading';
import NoSearch from './NoSearch';
import getTagList from '@/utils/getTagList';
import TagList from './TagList';

export default function Main() {
  const { data, isLoading } = useQuery<Post[]>({
    queryKey: ['post-list'],
    queryFn: () => getPostList(),
  });

  const { data: tagData } = useQuery<TagField[]>({
    queryKey: ['tag-list'],
    queryFn: () => getTagList(),
  });

  const {
    searchValue,
    searchedData,
    onSearchValueChange,
    searchedTagData,
    onTagValueChange,
  } = useSearchPost(data ?? []);

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <SearchInput
          searchValue={searchValue}
          onChange={onSearchValueChange}
        />
        <TagList
          tags={tagData ?? []}
          searchedTagData={searchedTagData}
          onClick={onTagValueChange}
        />
        {isLoading ? (
          <Loading />
        ) : searchedData?.length === 0 ? (
          <NoSearch />
        ) : (
          <PostList data={searchedData ?? []} />
        )}
      </div>
    </section>
  );
}
