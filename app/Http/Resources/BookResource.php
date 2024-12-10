<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BookResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $reviews = $this->reviews;

        if (count($reviews) > 0) {
            $average_vote = 0;
            foreach ($reviews as $review) {
                $average_vote += $review->vote;
            }
            $average_vote = round($average_vote / count($reviews), 2);
        } else $average_vote = '--';

        return [
            'id' => $this->id,
            'title' => $this->title,
            'author_id' => $this->author_id,
            'plot' => $this->plot,
            'author' => $this->author->name,
            'vote' => $average_vote,
        ];
    }
}
